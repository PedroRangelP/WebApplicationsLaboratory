const Bicicleta = require('../models/bicicletamongo')
const Reserva = require('../models/reservamongo')
const Usuario = require('../models/usuariomongo')

exports.bicicleta_list = (req, res) => {
  Bicicleta.allBicicletas((err, bicicletas) => {
    res.render('bicicletas/index', {bicicletas})
  })
}

exports.bicicleta_create_get = (req, res) => {
  res.render('bicicletas/create')
}

exports.bicicleta_create_post = (req, res) => {
  let bicicleta = Bicicleta.createBicicleta(req.body.id, req.body.color, req.body.modelo, [req.body.lat, req.body.lon])
  Bicicleta.add(bicicleta, (err, newBicicleta) => {
    res.redirect('/bicicletas')
  })
}

exports.bicicleta_delete_post = (req, res) => {
  Bicicleta.removeByCode(req.body.id).then(() => {
    res.redirect('/bicicletas')
  })
}

exports.bicicleta_update_get = (req, res) => {
  Bicicleta.findByCode(req.params.id, (err, bicicleta) => {
    res.render('bicicletas/update', {bicicleta})
  })
}

exports.bicicleta_update_post = (req, res) => {
  let update_values =  {
    code: req.body.id,
    color: req.body.color,
    modelo: req.body.modelo,
    ubicacion: [req.body.lon, req.body.lat]
  }

  Bicicleta.findOneAndUpdate({ code: req.params.id }, update_values, (err, bicicleta) => {
    res.redirect('/bicicletas')
  })
}

exports.reservar_get = function (req, res) {
  Bicicleta.find({}, function (err, bicicletas) {
    if (err) console.log(err)
    //Checar sesión
    session = req.session
    if (session && session.userid) {
      Reserva.find({}, (err, reservas) => {
        console.log("reservas:")
        console.log(reservas)
        res.render('bicicletas/reservar', { bicicletas: bicicletas, uid: session.userid, reservas: reservas })
      })
      
      /*Reserva.
        find({}).
        populate('bicicleta').
        populate('usuario').
        exec(function (err, reservas) {
          if (err) return handleError(err)
          console.log(reservas)
          res.render('bicicletas/reservar', { bicis: bicis, uid: session.userid, reservas: reservas })
      })*/
    } else {
      res.redirect('/login')
    }
  })
}

exports.reservar_post = function (req, res) {
  //Encontrar al usuario que hará la reserva
  Usuario.findOne({email: req.body.uid}, function (err, usuario) {
    if (err) {
      console.log(err)
    }
    //Encontrar la bicicleta que se reservará
    Bicicleta.findByCode(req.body.id, function (err, bicicleta) {
      if (err) {
        console.log(err)
      }
      //Hacer la reserva
      console.log("haciendo la reserva")
      let hoy = new Date()
      let mañana = new Date()
      mañana.setDate(hoy.getDate() + 1)
      usuario.reservar(bicicleta.id, hoy, mañana, function (err, reserva) {
        if (err) {
          console.log(err)
        }
        Bicicleta.find({}, function (err, bicis) {
          if (err) console.log(err)
          //Checar sesión
          session = req.session
          if (session && session.userid) {
            res.redirect('reservar')
          } else {
            res.redirect('/')
          }
        })
      })
    })
  })
}
