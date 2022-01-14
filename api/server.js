const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

server.get('/', (_, res) => {
    res.send(`<h1>I am running properly!</h1>`)
})

const users = [
    {
        user: 'dummy',
        password: 'pass123'
    },
    {
        user: '2dummy',
        password: 'pass123'
    },
    {
        user: '3dummy',
        password: 'pass123'
    }
]

const register = [
    {
        user: 'dummy',
        password: 'pass123'
    }
]

const login = [
    {
        user: 'dummy',
        password: 'pass123'
    }
]

server.get('/api/users', (_, res) => {
    res.status(200).json(users)
})

server.post('/api/register', (_, res) => {
    res.status(201).json(register)
})

server.post('/api/login', (_, res) => {
    if(!login){
        res.status(404).json({message: 'Correct Credentials required'})
    }else{
        res.status(200).json({message: 'Welcome User'})
    }
})

module.exports = server