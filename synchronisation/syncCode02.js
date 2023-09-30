const fs = require('fs')
const path = require('path')

res = path.join(__dirname,'/fileHandlerTestFolder/txt1.txt')
// console.log(res)

const getTxt = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path,'utf8',(err,data) => {
            if(err) reject(err) 
            else{
                resolve(data)
            }
        })

    })
}

//! if u do it in this(below) way then u will be still observing things happening asyncronously 

// const csc = async (pt) => {
//     const fle = await getTxt(pt).then((data) => {console.log(data)}).catch((err) => {console.log(err)})
//     // console.log("babyBaby")
// }

// for(let i = 0; i <100; i++) {
//     csc('./fileHandlerTestFolder/txt1.txt')
//     csc('./fileHandlerTestFolder/txt2.txt')
// }

//! but no more
// const csc = async () => {
//     const first = await getTxt('./fileHandlerTestFolder/txt1.txt').then((data) => {console.log(data)}).catch((err) => {console.log(err)})
//     // console.log(first)
//     const second = await getTxt('./fileHandlerTestFolder/txt2.txt').then((data) => {console.log(data)}).catch((err) => {console.log(err)})
//     // console.log(second)
// }

// for(let i = 0; i <2; i++) {
//     csc()
// }
//! and both works the same just the last one is a bit cleaner
const csc = async () => {
    try{
        const first = await getTxt('./fileHandlerTestFolder/txt1.txt')
        console.log(first)
        const second = await getTxt('./fileHandlerTestFolder/txt2.txt')
        console.log(second)

    }
    catch(error){
        console.log(error)
    }
}

for(let i = 0; i <2; i++) {
    csc()
}

//! now lets do the same thing but much clearer code usiing util module and promisfy method in the next file



