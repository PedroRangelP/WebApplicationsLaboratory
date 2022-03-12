const Bicicleta = require('../models/bicicleta')

exports.bicicleta_list = (req, res) => {
  res.render('bicicletas/index', {bicicletas: Bicicleta.allBicicletas})
}

exports.bicicleta_create_get = (req, res) => {
  res.render('bicicletas/create')
}

exports.bicicleta_create_post = (req, res) => {
  let bicicleta = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
  bicicleta.ubicacion = [req.body.lat, req.body.lon]
  Bicicleta.add(bicicleta)
  res.redirect('/bicicletas')
}

exports.bicicleta_delete_post = (req, res) => {
  Bicicleta.removeById(req.body.id)
  res.redirect('/bicicletas')
}

exports.bicicleta_update_get = (req, res) => {
  let bicicleta = Bicicleta.findById(req.params.id)
  res.render('bicicletas/update', {bicicleta}) 
}

exports.bicicleta_update_post = (req, res) => {
  let bicicleta = Bicicleta.findById(req.body.id)
  bicicleta.id = req.body.id
  bicicleta.color = req.body.color
  bicicleta.modelo = req.body.modelo
  bicicleta.ubicacion = [req.body.lat, req.body.lon]
  res.redirect('/bicicletas')
}