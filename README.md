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

### Client UI (WIP)

The client is the most used interface in the system.

![Client screenshot]{./img/Client.png}

### Features

- [x] Crash recovery (when unloading chunks for example)
- [x] Crafting
- [x] Caching
- [x] Defragmenting
- [x] Networking
- [x] Asynchronous RPC server
