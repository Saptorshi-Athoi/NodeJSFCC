const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') res.end('HomePage')
    if (req.url === '/about') {
        for(let i = 0; i <1000; i++)                //! this is the block part, its working in a synchronous way to prevent from others to work 
            for(let j = 0 ; j < 1000; j++)
                console.log(`${i}, ${j}`)
        res.end('aboutPage')
    }

});

server.listen(5000, ()=>{
    console.log('listening to server on port 5000')
})


