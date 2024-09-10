module.exports = {
  apps: [
    {
      name: 'NS e-commerce',
      script: 'npm',
      args: 'start',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
        NODE_ENV: 'production', // Убедитесь, что NODE_ENV установлен в 'production'
      },
      // Пост-запусковые команды
      post_deploy: 'npm install && npm run build'
    },
  ],
};
