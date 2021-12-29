module.exports = {
    devServer: {
      proxy: {
        '/api/v1': {
          target: 'http://localhost:3080/'
        },
        "/actuator": {
          target: 'http://localhost:3080/',
          pathRewrite: {'^/actuator' : '/api/v1'}
        }
      }
    }
  }