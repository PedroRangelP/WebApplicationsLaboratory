var express = require('express')
//const passport = require('passport')
const bcrypt = require('bcrypt')
const Usuario = require('../models/usuariomongo')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/* Login */
router.get('/login', function(req, res, next) {
  res.render('session/login')
})

router.post('/login', async function(req, res, next) {
  if (!req.body.password || !req.body.email) {
    res.render('session/login', { errors: { message: 'Favor de llenar ambos campos' } })
    return
  }
        
  //Login
  const body = req.body;
  const user = await Usuario.findOne({ email: body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      //Crear sesión y redireccionar a la parte segura de reserva de bicis:
      session = req.session;
      session.userid = req.body.email;
      console.log(req.session)
      res.redirect('../bicicletas/reservar')
      return
    } else {
      res.render('session/login', { errors: { message: 'Password incorrecto' } })
      return
    }
  } else {
    res.render('session/login', { errors: { message: 'No existe ese usuario' } })
    return
  }

  /*passport.authenticate('local', (err, usuario, info) => {
    //console.log(usuario)
    if(err) return next(err)
    if(!usuario) return res.render('session/login', {info})
    req.logIn(usuario, (err) => {
      if(err) return next(err)
      return res.redirect('/')
    })
  })(req, res, next)*/
})

module.exports = router
