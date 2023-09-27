const fs = require('fs')
console.log("Task: Starts" )

fs.readFile('./fileHandlerTestFolder/txt1.txt', 'utf8', (err, data) => {
    if (err) throw err
    const first = data
    fs.readFile('./fileHandlerTestFolder/txt2.txt', 'utf8', (err, data) => {
        if (err) throw err
        const second = data
        fs.writeFile('./fileHandlerTestFolder/resultsAsync.txt', `Here coomes the result : ${first} && ${second}`, (err, data) => {
            if (err) throw err
            console.log("Task: Ends")    
        })
    })
})
console.log("Task: New" )

//& Follow the order in which the messages are getting printed to hav a idea of how sync Async functions work