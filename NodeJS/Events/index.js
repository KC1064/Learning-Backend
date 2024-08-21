const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('checkpage', (data) => {
    console.log('Event Occurred',data.message);
});

emitter.emit('checkpage',{message: "Hello World"});