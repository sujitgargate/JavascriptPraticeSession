const EventEmittor = require('events')
const emmiter = new EventEmittor()

//Register a listener
emmiter.on('messageLogged', function(){
    console.log('listener called')
})



//Raise an event
emmiter.emit('messageLogged')

//Making a noise