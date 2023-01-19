type ConfigSchema = {[key: string]: ((value: any) => boolean)|string};

export default class Config {
  fileName: string;
  data = new LuaMap<string, any>;

  readonly serializers = {
    to: textutils.serializeJSON,
    from: textutils.unserializeJSON,
  }

  /**
   * Configuration schema
   * If the value is a string the `type` method will be used for validation. If it ends with `[]` the type will be an array.
   * If the value is a function it will be called for validation
   */
  readonly schema: ConfigSchema = { 
      storage: "string[]",
  };

  constructor(fileName: string) {
    this.fileName = fileName;

    this.load();
  }

  save(): void {
    const file = fs.open(this.fileName, 'r') as ReadHandle;

    this.data = this.serializers.from(file.readAll() ?? '{}') as LuaMap<string, any>;

    file.close();
  }

  load(): void {
    this.data = new LuaMap<string, any>;
  }

  get(key: string): any {

  }
  
  validate(key: string, value: any): boolean {
    let validator = this.schema[key];

    if (!validator) {
      return false;
    }

    if (typeof validator === "string" && validator.endsWith('[]')) {
      validator = validator.slice(0, validator.length - 2);

      return Array.isArray(validator) && value.every((x: any) => typeof x === validator);
    } else if (typeof validator === 'string') {
      return typeof value === validator;
    } else if (typeof validator === 'function') {
      return validator(value);
    } else {
      return false;
    }
  }
}