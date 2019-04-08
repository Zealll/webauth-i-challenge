const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const routers = require('./users/users-routers.js')


const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(
        `<h1>Welcome to Elan's Project</h1>`
    )
})

server.use('/api/users', routers)


module.exports = server

