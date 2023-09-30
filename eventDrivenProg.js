const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//^ these are custom events made by us
console.log(typeof(customEmitter))
customEmitter.on('any_name', (name,id) => {
    console.log(`data received ${name} ${id}`)    
})
customEmitter.on('any_name', () => {
    console.log('data received2')    
})

customEmitter.emit('any_name', 'BOby', 77890)   //^ The first parameter is the name of the event we want to emit, next comes the optional parameters for the callBack functions made when the events were initiated