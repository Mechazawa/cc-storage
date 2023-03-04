local server = 'storage'
local containerName = 'minecraft:chest_166'

peripheral.find("modem", rednet.open)

local host = rednet.lookup('rpc', server);
local container = peripheral.wrap(containerName);

print("ready")

while true do
    local slots = container.list()

    if #slots > 0 then
        print("Storing " .. #slots .. " slots")
        rednet.send(host, {
            method = 'storeAll',
            args = {containerName}
        }, 'rpc');
        sleep(3)
    else
        sleep(0.5)
    end
end
