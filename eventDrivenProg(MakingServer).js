const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    if(req.url == '/about') res.end('aboutPage')
    else
    res.end("ended PPAP")
})

server.listen(5000,() => {
    console.log('listening on port 5000')
})

//! we dont see a event emitter here, Here a request event is emitted by the server 