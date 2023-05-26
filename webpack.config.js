// пакет, который работает с обсолютными и относительными путями
const path = require('path');

module.exports = {
    output: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js' 
}