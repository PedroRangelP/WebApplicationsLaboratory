const mongoose = require('mongoose')
const Schema = mongoose.Schema

const token = new Schema({
  _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'usuario' },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
})

module.exports = mongoose.model('tokens', token)