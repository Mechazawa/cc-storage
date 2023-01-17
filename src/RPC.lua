--[[ rcp call data structure
{
	id = 123, -- either string or int
	method = "method_name",
	params = {} -- Array
}
--]]

--[[ response
{
	id = 123,
	result = {} -- table with all return vals
}
--]]

--[[ error
{
	id = 123,
	error = {},
}
--]]

local RPC = {protocol = "rpc"}

function RPC.init()
	peripheral.find("modem", rednet.open)
end

function RPC.host(hostname, methods)
	rednet.host(RPC.protocol, hostname)

	print("Hosting " .. RPC.protocol .. "://" .. hostname)
	print("Methods:\n  - " .. table.concat(RPC._get_keys(methods), '\n  - '))
	
	while true do
		local client, data = rednet.receive()

		if data.method == nil then
			data.method = 'INVALID_CALL'
		end

		local response = { id = data.id }

		print('---------')
		RPC.tprint(data)
		-- print('[' .. client .. '] ' .. data.method)
		-- if data.params then RPC.tprint(data.params) else print("nil") end
		
		if not methods[data.method] and data.method ~= '?' then
			response.error = "RPC ERROR: Uknown method \"" .. data.method .. "\""
		else 
			local function target() 
				if data.method == '?' then
					response.result = table.pack(RPC._get_keys(methods))
				else 
					response.result = table.pack(methods[data.method](table.unpack(data.args or {})))
				end
			end
			
			local function handler(err)
				response.error = err
			end
			
			xpcall(target, handler)            
		end   
		
		if data.id ~= nil then
			print("Responding to " .. client)
			rednet.send(client, response, RPC.protocol)
		end
	end 
end

function RPC.call(client, method, args)
	local request = {
		id = RPC._generate_id(),
		method = method,
		args = args
	}

	rednet.send(client, request, RPC.protocol)

	-- bad but works for now
	local response
	repeat 
		local id
		repeat 
			id, response = rednet.receive(RPC.protocol)
		until id == client
	until response.id == request.id

	if response.error then
		error(response.error)
	end

	return table.unpack(response.result or {})
end

function RPC.notify(client, method, args)
	local request = {
		method = method,
		args = args
	}

	rednet.send(client, request, RPC.protocol)
end

function RPC.wrap(client)
	local methods = RPC.call(client, '?')
	local output = {}

	for i=1, #methods do
		output[methods[i]] = function(...)
			return RPC.call(client, methods[i], table.pack(...))
		end
	end

	return output
end

function RPC._generate_id()
	return math.floor(math.random() * 1000000000)
end	

function RPC._get_keys(t)
  local keys={}
  for key,_ in pairs(t) do
    table.insert(keys, key)
  end
  return keys
end

--debug

function RPC.tprint (tbl, indent)
  if not indent then indent = 0 end
  for k, v in pairs(tbl) do
    formatting = string.rep("  ", indent) .. k .. ": "
    if type(v) == "table" then
      print(formatting)
      RPC.tprint(v, indent+1)
    elseif type(v) == 'boolean' then
      print(formatting .. tostring(v))		
    else
      print(formatting .. v)
    end
  end
end

return RPC