const mongoose = require('mongoose')
let Schema = mongoose.Schema

let bicicleta = new Schema({
  code: Number,
  color: String, 
  modelo: String, 
  ubicacion: {
    type: [Number], index: {type: '2dsphere', sparse: true}
  }
})

bicicleta.statics.createBicicleta = function (code, color, modelo, ubicacion) {
  return new this({
    code: code,
    color: color,
    modelo: modelo,
    ubicacion: ubicacion
  })
}

bicicleta.method.toString = function () {
  return `code: ${this.code}, color: ${this.color}, modelo: ${this.modelo}`
}

bicicleta.statics.allBicicletas = function (cb) {
  return this.find({}, cb)
}

bicicleta.statics.add = function (bicicleta, cb) {
  this.create(bicicleta, cb)
}

bicicleta.statics.findByCode = function (code, cb) {
  return this.findOne({ code: code }, cb)
}

bicicleta.statics.removeByCode = function (code, cb) {
  return this.deleteOne({ code: code }, cb)
}

module.exports = mongoose.model('bicicletas', bicicleta)