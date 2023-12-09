module.exports = {
  apps: [
    {
      script: './dist/app.js',
      name: 'server-boilerplate-app-api',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
      instances: 1,
      exec_mode: 'cluster',
    },
  ],
};
