let appConfig = require('./configs/app')
let mongoDB = require('./database/mongoConnection')
let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

let indexRouter = require('./routes/index')
let usersRouter = require('./routes/users')
let bicicletaRouter = require('./routes/bicicleta')
let bicicletaAPI = require('./routes/api/bicicleta')
let usuarioRouter = require('./routes/usuario')
let usuarioAPI = require('./routes/api/usuario')
let tokenRouter = require('./routes/token')

// MongoDB
mongoDB.connect()

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/bicicletas', bicicletaRouter)
app.use('/api/bicicletas', bicicletaAPI)
app.use('/usuarios', usuarioRouter)
app.use('/api/usuarios', usuarioAPI)
app.use('/token', tokenRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
