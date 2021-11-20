module.exports = {
  apps: [
    {
      name: "graphql",
      script: "develop.js",
      watch: ["api/graphql.js", "develop.js"],
      autorestart: false,
    },
    {
      name: "build-backend",
      script: "npm",
      args: "run build:api",
      watch: ["api", "shared"],
      ignore_watch: ["api/graphql.js", "api/graphql.js.map"],
      autorestart: false,
    },
    {
      name: "build-frontend",
      script: "npm",
      args: "run build:client",
      watch: ["client"],
      ignore_watch: ["client/index.js", "client/index.js.map"],
      autorestart: false,
    },
  ],
};
