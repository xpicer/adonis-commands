'use strict'

/**
 * adonis-commands
 * Copyright(c) 2015-2015 Harminder Virk
 * MIT Licensed
*/

const ServerLogs = require('../src/Server/Logs')
const Ansi = require('adonis-ace').Ansi
const path = require('path')

const Helpers = {
  basePath: function (){
    return path.join(__dirname,'./app')
  },
  publicPath : function () {

  },
  resourcesPath : function () {

  },
  storagePath : function () {

  },
  migrationsPath : function () {

  }
}

const server = new ServerLogs(Helpers,Ansi)
const co = require('co')

co(function *() {

  return yield server.handle({type:'stream'})

}).catch(function (error) {
  console.log(error)
})
