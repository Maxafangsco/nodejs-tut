// commonJS, Every file in module (by default)
//Modules - Encapsulate code (only share minimum)


const names = require('./4-names')
const SayHi = require('./5-utiles')

const data = require('./6-alternative-flavour')
console.log(data)

require('./7-mind-grenade')

SayHi('susan')
SayHi(names.john)
SayHi(names.peter)