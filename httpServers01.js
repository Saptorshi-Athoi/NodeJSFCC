const http = require('http');

const Server = http.createServer((req, res) => {
    console.log(req.url + ': ' + req.method)
        if (req.url === '/')
            res.write('Welcome to my condo')
        else if (req.url === '/about')
            res.write('Welcome to my about')
        else res.write(`
            <h1>Fuck off!</h1>
        `)
        res.end()
        //&---------------------------------------- both fetches same result
        // if (req.url === '/')
        //     res.end('Welcome to my condo')
        // else if (req.url === '/about')
        //     res.end('Welcome to my about')
        // else res.end(`
        //     <h1>Fuck off!</h1>
        // `)
})

try{
    Server.listen(5000)
}catch(err){
    console.log(err)
}

// setTimeout(()=>{Server.close()}, 10000)