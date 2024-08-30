module.exports = {
  apps: [
    {
      name: 'NS e-commerce',
      script: 'npm',
      args: 'run start',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
      },
    },
  ],
  deploy: {
    production: {
      user: "almalinux",
      host: "77.240.39.55",
      path: "cd ns-e-commerce/",
      repo: "git@github.com:T410/pm2-deploy",
      ref: "origin/main",
      key: "cat .ssh/id_rsa",
      "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
    },
  },
};
