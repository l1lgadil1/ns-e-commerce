module.exports = {
  apps: [
    {
      name: 'NS e-commerse',
      script: 'node_modules/next/dist/bin/next',
      args: '-p 3000',
      exec_mode: 'cluster',
    },
  ],
  deploy: {
    production: {
      user: process.env.REMOTE_SERVER_USERNAME,
      host: process.env.REMOTE_SERVER_IP,
      path: process.env.PROJECT_PATH,
      repo: "git@github.com:T410/pm2-deploy",
      ref: "origin/main",
      key: process.env.SSH_KEY_PATH,
      "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
    },
  },
};
