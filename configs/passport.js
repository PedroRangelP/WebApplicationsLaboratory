const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('../models/usuariomongo')

passport.use(new LocalStrategy((email, password, done) => {
  Usuario.findOne({email: email}, (err, usuario) => {
    //console.log(usuario)
    if(err) return done(err)
    if(!usuario) return done(null, false, {message: 'Email no existe o incorrecto'})
    if(!usuario.validPassword(password)) return done(null, false, {message: 'Password incorrecto'})

    return done(null, usuario)
  })
}))

passport.serializeUser((err, cb) => {
  cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
  Usuario.findById(id, (err, cb) => {
    if(err) console.log(err)
    cb(err, isiarop)
    cb(err, usuario)
  })
})

module.exports = passport