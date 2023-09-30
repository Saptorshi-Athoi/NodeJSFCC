const {createReadStream} = require('fs')
console.log(typeof(createReadStream))

const stream = createReadStream('./fileHandlerTestFolder/bigTxt.txt')
console.log(typeof(stream))

stream.on('data', (result) => {
    console.log(result)
})

//! this code proves that how stream read data in chunks, u can see "2932 more bytes" in the output..