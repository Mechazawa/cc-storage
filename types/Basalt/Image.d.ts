import { BObject } from "./BObject.d";

declare interface Image extends BObject {
  /**
   * Returns the current image size
   *
   * @returns {number} width
   * @returns {number} height
   */
  getImageSize(): number | number;

  /**
   * Returns the metadata set in the image
   *
   * @param key the metadata key (for example: title, description, author, creator, data, width, height,...)
   * @returns {any} metadata value
   */
  getMetadata(key: string): any;

  /**
   * This method is used to load an image file into the image object.
   *
   * @param path the absolute file path
   * @returns {this} The object in use
   * @usage Creates a default image and loads a test.nfp file
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aImage = mainFrame:addImage():loadImage("test.nfp")
   * ```
   *
   * ```xml
   * <image path="test.nfp" />
   * ```
   */
  loadImage(path: string): this;

  /**
   * Plays a bimg animation. This can only work if the bimg has more than 1 frame.
   *
   * @param value If the image animation should play
   * @returns {this} The object in use
   */
  play(value: boolean): this;

  /**
   * This method is used to resize a bimg image. It takes two parameters: the new width, and the new height. It is important to note that resizing images can result in a loss of quality, as the original pixel data is being transformed and resampled to fit the new dimensions. This is especially noticeable when increasing the size of an image, as new pixels must be generated to fill in the gaps. As a result, it is generally recommended to use the original image at its full size whenever possible, rather than resizing it.
   *
   * @param width the new width
   * @param height the new height
   * @returns {this} The object in use
   * @usage Creates a new image object, loads the image and changes it's size.
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aImage = mainFrame:addImage():loadImage("test.bimg"):resizeImage(40, 20)
   * ```
   */
  resizeImage(width: number, height: number): this;

  /**
   * The selectFrame method allows you to change the current frame of an image object. It takes a single parameter, the index of the frame you want to display.
   *
   * @param index the frame index
   * @returns {this} The object in use
   * @usage Creates a default image and loads a test.nfp file
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aImage = mainFrame:addImage():loadImage("test.bimg"):selectFrame(2)
   * ```
   */
  selectFrame(index: number): this;

  /**
   * Sets a new image
   *
   * @param A table in bimg or nfp format.
   * @param format The format in which the image should be loaded (nfp or bimg)
   * @usage Creates a default image and loads a test.nfp file
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   *
   * local bimg = {
   *     [1] = {
   *         {"Hello", "fffff", "33333"}
   *     }
   */
  setImage(A: string[][][] | any, format: string): void;

  /**
   * Shrinks the current image into a blittle image.
   *
   * @returns {this} The object in use
   * @usage Creates a default image and loads a test.nfp file
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aImage = mainFrame:addImage():loadImage("test.nfp"):shrink()
   * ```
   * ```xml
   * <image path="test.nfp" shrink="true" />
   * ```
   */
  shrink(): this;

  /**
   * Changes the palette colors of the image, if the bimg image has palette metadata.
   *
   * @param value if the image should change the palette
   * @returns {this} The object in use
   */
  usePalette(value: boolean): this;
}
