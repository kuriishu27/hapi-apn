'use strict'

const apn = require('apn')

exports.plugin = {
  async register (server, options) {
    let connection;

    if (options) {
      connection = new apn.Provider(options)
    }
    
    connection.setMaxListeners(10000000)
  
    server.decorate('server', 'apn', {
      connection,
      Notification: apn.Notification,
      Provider: apn.Provider
    })
  },
  pkg: require('../package.json')
}

