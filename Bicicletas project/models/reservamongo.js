const mongoose = require('mongoose')
const moment = require('moment')
let Schema = mongoose.Schema

let reserva = new Schema({
  desde: Date,
  hasta: Date,
  bicicleta: {type: mongoose.Schema.Types.ObjectId, ref: 'bicicleta'},
  usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'usuario'}
})

reserva.methods.diasDeReserva = function () {
  return moment(this.hasta).diff(moment(this.desde), 'days') + 1
}

module.exports = mongoose.model('reservas', reserva)