const os = require("os")

usrInfo = os.userInfo()
console.log(os.userInfo())
console.log(os.uptime())

const moreOSInfo = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(moreOSInfo)