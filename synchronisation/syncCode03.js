const util = require('util')
const { readFile, writeFile } = require('fs')

read = util.promisify(readFile)
write = util.promisify(writeFile)

// console.log(read, write)

const start = async () => {
    try{
        first = await read('./fileHandlerTestFolder/txt1.txt','utf8')
        console.log(first)
        second = await read('./fileHandlerTestFolder/txt2.txt','utf8')
        console.log(second)
        await write('./fileHandlerTestFolder/syncWritten.txt',`${first} &&& ${second}`)
        third = await read('./fileHandlerTestFolder/syncWritten.txt','utf8')
        console.log(third)
    }
    catch(err){
        console.error(err)
    }
}
// for(let i = 0; i <5 ; i++)
start()

//!even shorter and snappier