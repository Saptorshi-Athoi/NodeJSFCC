const path = require('path');

setTimeout(() => {
    console.log('inside setTimeout')
},0)

for(let i = 0; i < 100000 ; i++)
console.log("AB " + i)
