module.exports = {
    devServer:{
      proxy:{
        '/api': {
          target: 'http://localhost:{port}'
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/BuildARobotApp/'
      : '/'
  }