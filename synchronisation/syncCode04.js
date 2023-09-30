// const util = require('util')
const { readFile, writeFile } = require('fs').promises

// read = util.promisify(readFile)
// write = util.promisify(writeFile)

// console.log(read, write)

const start = async () => {
    try{
        first = await readFile('./fileHandlerTestFolder/txt1.txt','utf8')
        console.log(first)
        second = await readFile('./fileHandlerTestFolder/txt2.txt','utf8')
        console.log(second)
        await writeFile('./fileHandlerTestFolder/syncWritten.txt',`${first} &&& ${second}`, {flag:'a'}) //! Flag used
        third = await readFile('./fileHandlerTestFolder/syncWritten.txt','utf8')
        console.log(third)
    }
    catch(err){
        console.error(err)
    }
}
// for(let i = 0; i <5 ; i++)
start()

//!even shorter and snappier