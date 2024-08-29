module.exports = {
  apps: [
    {
      name: 'NS e-commerse',
      script: 'node_modules/next/dist/bin/next',
      args: '-p 3000',
      exec_mode: 'cluster',
      instances: 'max'
    }
  ]
};
