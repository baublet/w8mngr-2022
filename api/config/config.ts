import { ServiceContainer } from "@baublet/service-container";
import { Env, envService } from "./env.js";

type ConfigOption = string | ((key: string | undefined) => any);

type KeyTypeMap<T extends Record<string, ConfigOption>> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends (key: string | undefined) => infer TFunctionReturn
    ? TFunctionReturn
    : never;
};

function createConfig<TConfig extends Record<string, ConfigOption>>(
  env: Env,
  config: TConfig
): {
  get: <T extends keyof TConfig>(key: T) => KeyTypeMap<TConfig>[T];
} {
  return {
    get: (key: string) => {
      const value = env[key];
      const defaultOrFn = config[key];
      if (typeof defaultOrFn === "function") {
        return defaultOrFn(value);
      }
      if (!value) {
        return defaultOrFn;
      }
      return value;
    },
  } as any;
}

export function configService(serviceContainer: ServiceContainer) {
  const env = serviceContainer.get(envService);
  return createConfig(env, {
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_API_SECRET: "",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/baublet/auto/upload",
    // Useful in local development to avoid sending emails
    DANGEROUSLY_LOG_EMAIL_LOGIN_LINKS: "false",
    DATABASE: "production",
    DATABASE_SCHEMA: "public",
    DB_CONNECTION_STRING: "postgresql://w8mngr:w8mngr@localhost:5432",
    JWT_SECRET: "Don't use the default value, please!",
    MAILGUN_API_KEY: "",
    MAILGUN_BASE_URL: "",
    MAILGUN_DOMAIN: "",
    NETLIFY: "false",
    NODE_ENV: "production",
    PUBLIC_URL: otherEnvValuesOrDefault(env, ["URL"], "http://localhost:5173"),
    SALT: "Don't use the default, please!",
    SUPPRESS_CONSOLE_LOGGING: "true",
    SUPPRESS_EMAILS: "true",
  });
}

function otherEnvValuesOrDefault(
  env: Env,
  vars: string[],
  defaultValue: string
): (value: string | undefined) => string {
  return (value) => {
    if (value) {
      return value;
    }
    for (const envVar of vars) {
      const value = env[envVar];
      if (value) {
        return value;
      }
    }
    return defaultValue;
  };
}
