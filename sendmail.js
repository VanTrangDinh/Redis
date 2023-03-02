const express = require('express')
const app = express()
const redis = require('redis')

const subscribe = redis.createClient()
  
    subscribe.subscribe('orderSystem')
    subscribe.on('message', (channel, message) => {
        console.log('Send mail to channel', channel)
        console.log('With Object', JSON.parse(message) )
    })

app.listen( 3002, () => {
    console.log(`The server running 3002`)
})