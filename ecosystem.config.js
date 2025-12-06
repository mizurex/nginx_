module.exports = {
    apps: [
      {
        name: "app-dev",
        script: "server.js",
        instances: 1,
        exec_mode: "fork",
        env: {
          NODE_ENV: "development",
          PORT: 3000,   // ⭐ dev listens on 3000 inside container
        },
      },
      {
        name: "app-prod",
        script: "server.js",
        instances: 3,          // 3 instances for prod (cluster)
        exec_mode: "cluster",
        env: {
          NODE_ENV: "production",
          PORT: 3000,   // ⭐ prod also listens on 3000 inside container
        },
      },
    ],
  };
  