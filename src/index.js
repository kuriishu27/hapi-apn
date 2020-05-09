'use strict'

const apn = require('apn')

exports.plugin = {
  async register (server, pluginOptions) {
    let connection;

    if (pluginOptions) {
      connection = new apn.Provider(pluginOptions)
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

