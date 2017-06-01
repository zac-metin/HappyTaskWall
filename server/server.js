var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var tasksRoutes = require('./routes/tasks')
var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/tasks', tasksRoutes)

module.exports = server
