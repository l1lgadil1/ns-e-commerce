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
      user: "ubuntu",
      host: "77.240.39.55",
      ref: "origin/main",
      repo: "git@github.com:T410/pm2-deploy",
      path: "/home/ubuntu/ns-e-commerce", // Путь на сервере
      key: "~/.ssh/id_rsa", // Путь до приватного ключа
      "post-deploy": "npm i && npm run build && pm2 reload ecosystem.config.js --env production"
    },
  },
};
