const { readFileSync, writeFileSync } = require('fs');

console.log("task Starts")

const first = readFileSync('./fileHandlerTestFolder/txt1.txt', 'utf8')
const second = readFileSync('./fileHandlerTestFolder/txt2.txt', 'utf8')

writeFileSync(
    './fileHandlerTestFolder/resultsSync.txt', `Here coomes the result : ${first} && ${second}`,
    { flag: 'a' }         //& This will help to append. these are called options
)
console.log("Task Ends")
console.log("Starting new Task")