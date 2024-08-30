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
