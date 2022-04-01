//const Bicicleta = require('../models/bicicleta')
const BicicletaDB = require('../models/bicicletadb')

exports.bicicleta_list = (req, res) => {
  BicicletaDB.allBicicletas()
    .then((bicicletas) => {
      res.render('bicicletas/index', {bicicletas})
    })

  //res.render('bicicletas/index', {bicicletas: Bicicleta.allBicicletas})
}

exports.bicicleta_create_get = (req, res) => {
  res.render('bicicletas/create')
}

exports.bicicleta_create_post = (req, res) => {
  BicicletaDB.add(req.body.color, req.body.modelo, req.body.lat, req.body.lon)
    .then((result) => {
      res.redirect('/bicicletas')
    })

  /*let bicicleta = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
  bicicleta.ubicacion = [req.body.lat, req.body.lon]
  Bicicleta.add(bicicleta)
  res.redirect('/bicicletas')*/
}

exports.bicicleta_delete_post = (req, res) => {
  BicicletaDB.removeById(req.body.id)
    .then((result) => {
      res.redirect('/bicicletas')
    })
  /*Bicicleta.removeById(req.body.id)
  res.redirect('/bicicletas')*/
}

exports.bicicleta_update_get = (req, res) => {
  BicicletaDB.findById(req.params.id)
    .then((data) => {
      let bicicleta = data[0]
      res.render('bicicletas/update', {bicicleta})
    })
  /*let bicicleta = Bicicleta.findById(req.params.id)
  res.render('bicicletas/update', {bicicleta})*/
}

exports.bicicleta_update_post = (req, res) => {
  BicicletaDB.updateById(req.body.id, req.body.color, req.body.modelo, req.body.lat, req.body.lon)
    .then((result) => {
      res.redirect('/bicicletas')
    })
  /*let bicicleta = Bicicleta.findById(req.body.id)
  bicicleta.id = req.body.id
  bicicleta.color = req.body.color
  bicicleta.modelo = req.body.modelo
  bicicleta.ubicacion = [req.body.lat, req.body.lon]
  res.redirect('/bicicletas')*/
}