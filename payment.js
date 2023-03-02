const express = require('express')
const app = express()
const redis = require('redis')

const subscribe = redis.createClient()

  
    subscribe.subscribe('orderSystem')
    subscribe.on('message', (channel, message) => {
        console.log('Receive channel', channel)
        console.log('Receive message', message)
    })




app.listen( 3001, () => {
    console.log(`The server running 3001`)
})