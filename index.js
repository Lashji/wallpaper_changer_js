// Need to take image url from other program
// Need to find out what os it is
// console.log(process.platform)


if (process.platform == 'win32') {
    module.exports = require('./windows')
} else if (process.platform == 'linux') {
    module.exports = require('./linux/linux_main')
}