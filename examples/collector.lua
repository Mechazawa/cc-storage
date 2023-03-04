local server = 'storage'
local container = 'minecraft:chest_1'

peripheral.find("modem", rednet.open)

local host = rednet.lookup('rpc', server);

container = peripheral.wrap(container);

while true do
  local items = container.list()

  if #items > 0 then
    print("Storing " .. #items .. " items")
    rednet.call(host, {method = 'storeAll'}, 'rpc');
  end

  sleep(0.5)
end