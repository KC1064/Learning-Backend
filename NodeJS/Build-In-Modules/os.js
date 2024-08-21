const os = require('os');
const freeMemory = os.freemem();
console.log(freeMemory);
console.log(os.hostname());
console.log(os.userInfo());
console.log(os.type());
