# cc-storage

 ---------

**NOTE:**
*This is still a work in progress and not ready for usage*

## Documentation

*You'll figure it out* , -Mecha, probably

### Setup

There are three types of terminals (currently):

- Server
- Client
- Crafter

A cc-storage system only can have 1 server in each network. When running the installer, the server will add all connected storages as storage, so be sure to have any chests associated with clients diconnected from your network when setting up the server.

The client is the terminal where you actually interface with items and can store/retrieve items. When adding a client, only have the chest connected which your retrieved items go to. After intializing the client, connect it to the network.

A crafter runs on a crafting turtle. It can load recipes from a file (somehwere?). The crafter crafts items and puts them back in the network.

Furnaces are found when the server boots and used for smelting rather than storage. Blast furnaces and smokers are left alone, since they only accept part of what a furnace takes. Anything left in them, by a crash or by hand, goes back into storage on boot. `smelt [item] [count]` spreads a batch evenly over every furnace found. Register what may be burned first with `fuel add [item] [min_kept] [priority]`: the lowest priority is spent first, and `min_kept` is the amount that stays in storage untouched. A batch fails outright when no registered fuel is available instead of half-finishing, and fuel that goes into a furnace without burning comes back.

`smelt` and `craft` hand the work to the server and return straight away, since either runs for minutes. `status` lists what is running with how far along it is, and reports a job that failed once.

### Features

- [x] Crash recovery (when unloading chunks for example)
- [x] Crafting
- [x] Smelting
- [x] Caching
- [x] Defragmenting
- [x] Networking
- [x] Asynchronous RPC server
