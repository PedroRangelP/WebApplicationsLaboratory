const mongoose = require('mongoose')
const Reserva = require('./reservamongo')

const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const saltRounds = 10

let Schema = mongoose.Schema

let validateEmail = function(email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
}

let usuario = new Schema({
  nombre: {
    type: String,
    trim: true,
    required: [true, 'El nombre es obligatorio']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'El email es obligatorio'],
    lowercase: true,
    unique: true,
    validate: [validateEmail, 'Por favor, ingrese un email válido'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Ingrese un email válido']
  },
  password: {
    type: String,
    required: [true, 'El password es obligatorio']
  },
  passwordResetToken: String,
  passwordResetTokenExpires: Date,
  verificado: {
    type: Boolean,
    default: false
  }
})

usuario.plugin(uniqueValidator, { message: 'El {PATH} ya existe con otro usuario.' })

usuario.pre('save', function (next) {
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, saltRounds)
  }
  next()
})

usuario.methods.validPassword = function (password) {
  return bcrypt.compare(password, this.password)
}

usuario.methods.reservar = function (bicicletaId, desde, hasta, cb) {
  let reserva = new Reserva({
    usuario: this._id,
    bicicleta: bicicletaId,
    desde: desde,
    hasta: hasta
  })

  reserva.save(cb)
}

module.exports = mongoose.model('usuarios', usuario)