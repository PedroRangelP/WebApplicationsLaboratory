const Bicicleta = require('../models/bicicletamongo')

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