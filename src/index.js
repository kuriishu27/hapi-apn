'use strict'

const apn = require('apn')

exports.register = function (server, options, next) {
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


  next()
}

exports.register.attributes = {
  name: 'hapi-apn'
}
