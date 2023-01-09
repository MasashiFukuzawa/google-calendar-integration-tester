import { config, DotenvConfig } from "../mod.ts";

class EnvSingleton {
  private static singleton = new EnvSingleton();

  config: DotenvConfig | null;
  private constructor() {
    this.config = null;
  }

  setConfig(): DotenvConfig {
    this.config = config();
    return this.config;
  }

  env(): DotenvConfig {
    return this.config || this.setConfig();
  }

  static getInstance(): EnvSingleton {
    return this.singleton;
  }
}

const env = EnvSingleton.getInstance().env();

export default env;
