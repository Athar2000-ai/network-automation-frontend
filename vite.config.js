export default {
  server: {
    proxy: {
      '/ping': 'http://localhost:5000',
      '/configure': 'http://localhost:5000'
    },
    allowedHosts: ['all']
  },
};
