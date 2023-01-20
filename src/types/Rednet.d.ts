/** Communicate with other computers by using @{modem|modems}. @{rednet}
 * provides a layer of abstraction on top of the main @{modem} peripheral, making
 * it slightly easier to use.
 * ## Basic usage
 * In order to send a message between two computers, each computer must have a
 * modem on one of its sides (or in the case of pocket computers and turtles, the
 * modem must be equipped as an upgrade). The two computers should then call
 * @{rednet.open}, which sets up the modems ready to send and receive messages.
 * Once rednet is opened, you can send messages using @{rednet.send} and receive
 * them using @{rednet.receive}. It's also possible to send a message to _every_
 * rednet-using computer using @{rednet.broadcast}.
 * :::caution Network security
 * While rednet provides a friendly way to send messages to specific computers, it
 * doesn't provide any guarantees about security. Other computers could be
 * listening in to your messages, or even pretending to send messages from other computers!
 * If you're playing on a multi-player server (or at least one where you don't
 * trust other players), it's worth encrypting or signing your rednet messages.
 * :::
 * ## Protocols and hostnames
 * Several rednet messages accept "protocol"s - simple string names describing what
 * a message is about. When sending messages using @{rednet.send} and
 * @{rednet.broadcast}, you can optionally specify a protocol for the message. This
 * same protocol can then be given to @{rednet.receive}, to ignore all messages not
 * using this protocol.
 * It's also possible to look-up computers based on protocols, providing a basic
 * system for service discovery and [DNS]. A computer can advertise that it
 * supports a particular protocol with @{rednet.host}, also providing a friendly
 * "hostname". Other computers may then find all computers which support this
 * protocol using @{rednet.lookup}.
 * [DNS]: https://en.wikipedia.org/wiki/Domain_Name_System "Domain Name System"
 * @module rednet
 * @since 1.2
 * @see rednet_message Queued when a rednet message is received.
 * @see modem Rednet is built on top of the modem peripheral. Modems provide a more
 * bare-bones but flexible interface.
 * @noSelf
 */
declare interface Rednet {
  /**
   * The channel used by the Rednet API to @{broadcast} messages.
   */
  CHANNEL_BROADCAST: number;

  /**
   * The channel used by the Rednet API to repeat messages.
   */
  CHANNEL_REPEAT: number;

  /** The number of channels rednet reserves for computer IDs. Computers with IDs
   * greater or equal to this limit wrap around to 0.
   */
  MAX_ID_CHANNELS: number;

  /** Opens a modem with the given @{peripheral} name, allowing it to send and
   * receive messages over rednet.
   * This will open the modem on two channels: one which has the same
   * @{os.getComputerID|ID} as the computer, and another on
   * @{CHANNEL_BROADCAST|the broadcast channel}.
   * @param modem The name of the modem to open.
   * @throws If there is no such modem with the given name
   * @usage Open rednet on the back of the computer, allowing you to send and receive
   * rednet messages using it.
   *     rednet.open("back")
   * @usage Open rednet on all attached modems. This abuses the "filter" argument to
   * @{peripheral.find}.
   *     peripheral.find("modem", rednet.open)
   * @see rednet.close
   * @see rednet.isOpen
   */
  open(modem: string): void;

  /** Close a modem with the given @{peripheral} name, meaning it can no longer
   * send and receive rednet messages.
   *
   * @param modem The side the modem exists on. If not given, all open modems will be closed.
   * @throws If there is no such modem with the given name
   * @see rednet.open
   */
  close(modem?: string): void;

  /** Determine if rednet is currently open.
   *
   * @param modem Which modem to check. If not given, all connected
   * modems will be checked.
   * @return If the given modem is open.
   * @since 1.31
   * @see rednet.open
   */
  isOpen(modem: string): boolean;

  /** Allows a computer or turtle with an attached modem to send a message
   * intended for a sycomputer with a specific ID. At least one such modem must first
   * be @{rednet.open|opened} before sending is possible.
   * Assuming the target was in range and also had a correctly opened modem, the
   * target computer may then use @{rednet.receive} to collect the message.
   * @param recipient The ID of the receiving computer.
   * @param message The message to send. Like with @{modem.transmit}, this can
   * contain any primitive type (numbers, booleans and strings) as well as
   * tables. Other types (like functions), as well as metatables, will not be
   * transmitted.
   * @tparam[opt] string protocol The "protocol" to send this message under. When
   * using @{rednet.receive} one can filter to only receive messages sent under a
   * particular protocol.
   * @return If this message was successfully sent (i.e. if rednet is
   * currently @{rednet.open|open}). Note, this does not guarantee the message was
   * actually _received_.
   * @changed 1.6 Added protocol parameter.
   * @changed 1.82.0 Now returns whether the message was successfully sent.
   * @see rednet.receive
   * @usage Send a message to computer #2.
   *     rednet.send(2, "Hello from rednet!")
   */
  send(recipient: number, message: object | LuaMap | string | number | boolean, protocol?: string): boolean;

  /** Broadcasts a string message over the predefined @{CHANNEL_BROADCAST}
   * channel. The message will be received by every device listening to rednet.
   * @param message The message to send. This should not contain coroutines or
   * functions, as they will be converted to @{nil}.
   * @param protocol The "protocol" to send this message under. When
   * using @{rednet.receive} one can filter to only receive messages sent under a
   * particular protocol.
   * @see rednet.receive
   * @changed 1.6 Added protocol parameter.
   * @usage Broadcast the words "Hello, world!" to every computer using rednet.
   *     rednet.broadcast("Hello, world!")
   */
  broadcast(message: LuaMap | string | number | boolean, protocol?: string): boolean;

  /** Wait for a rednet message to be received, or until `nTimeout` seconds have
   * elapsed.
   * @param protocol_filter The protocol the received message must be
   * sent with. If specified, any messages not sent under this protocol will be
   * discarded.
   * @param timeout The number of seconds to wait if no message is
   * received.
   * @see rednet.broadcast
   * @see rednet.send
   * @changed 1.6 Added protocol filter parameter.
   * @usage Receive a rednet message.
   *     local id, message = rednet.receive()
   *     print(("Computer %d sent message %s"):format(id, message))
   * @usage Receive a message, stopping after 5 seconds if no message was received.
   *     local id, message = rednet.receive(nil, 5)
   *     if not id then
   *         printError("No message received")
   *     else
   *         print(("Computer %d sent message %s"):format(id, message))
   *     end
   * @usage Receive a message from computer #2.
   *     local id, message
   *     repeat
   *         id, message = rednet.receive()
   *     until id == 2
   *     print(message)
   */
  receive(
    protocol_filter?: string,
    timeout?: number
  ): undefined | LuaMultiReturn<[number, string | number | boolean | LuaMap, string | undefined]>;

  /** Register the system as "hosting" the desired protocol under the specified
   * name. If a rednet @{rednet.lookup|lookup} is performed for that protocol (and
   * maybe name) on the same network, the registered system will automatically
   * respond via a background process, hence providing the system performing the
   * lookup with its ID number.
   * Multiple computers may not register themselves on the same network as having the
   * same names against the same protocols, and the title `localhost` is specifically
   * reserved. They may, however, share names as long as their hosted protocols are
   * different, or if they only join a given network after "registering" themselves
   * before doing so (eg while offline or part of a different network).
   * @param protocol The protocol this computer provides.
   * @param hostname The name this protocol exposes for the given protocol.
   * @throws If trying to register a hostname which is reserved, or currently in use.
   * @see rednet.unhost
   * @see rednet.lookup
   * @since 1.6
   */
  host(protocol: string, hostname: string): void;

  /** Stop @{rednet.host|hosting} a specific protocol, meaning it will no longer
   * respond to @{rednet.lookup} requests.
   *
   * @param protocol The protocol to unregister your self from.
   * @since 1.6
   */
  unhost(protocol: string): void;

  /** Search the local rednet network for systems @{rednet.host|hosting} the
   * desired protocol and returns any computer IDs that respond as "registered"
   * against it.
   * If a hostname is specified, only one ID will be returned (assuming an exact
   * match is found).
   * @param protocol The protocol to search for.
   * @tparam[opt] string hostname The hostname to search for.
   * @treturn[1] number... A list of computer IDs hosting the given protocol.
   * @treturn[2] number|nil The computer ID with the provided hostname and protocol,
   * or @{nil} if none exists.
   * @since 1.6
   * @usage Find all computers which are hosting the `"chat"` protocol.
   *     local computers = {rednet.lookup("chat")}
   *     print(#computers .. " computers available to chat")
   *     for _, computer in pairs(computers) do
   *       print("Computer #" .. computer)
   *     end
   * @usage Find a computer hosting the `"chat"` protocol with a hostname of `"my_host"`.
   *     local id = rednet.lookup("chat", "my_host")
   *     if id then
   *       print("Found my_host at computer #" .. id)
   *     else
   *       printError("Cannot find my_host")
   *     end
   */
  lookup(protocol: string, hostname?: string): LuaMultiReturn<number[]> | number | undefined;

  /** Listen for modem messages and converts them into rednet messages, which may
   * then be @{receive|received}.
   *
   * This is automatically started in the background on computer startup, and
   * should not be called manually.
   */
  run(): void;
}
