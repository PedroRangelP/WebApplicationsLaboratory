var express = require('express')
const passport = require('passport')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/* Login */
router.get('/login', function(req, res, next) {
  res.render('session/login')
})

router.post('/login', function(req, res, next) {
  passport.authenticate('local', (err, usuario, info) => {
    //console.log(usuario)
    if(err) return next(err)
    if(!usuario) return res.render('session/login', {info})
    req.logIn(usuario, (err) => {
      if(err) return next(err)
      return res.redirect('/')
    })
  })(req, res, next)
})

module.exports = router
