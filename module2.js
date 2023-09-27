namePrinter = (name) => {
    console.log('Coming from functions ' + name)
}

// module.exports = namePrinter    //& exported as a function
module.exports = {namePrinter}    //& exported as an object
// console.log(module)              //! Why would this line also get executed even when im not exporting it
//! when we have a invoked function inside a module, even though we dont export them, it will automatically run, (console.log() is an invoked function)
namePrinter("Gus")  //^ Similarly