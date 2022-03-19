const Bicicleta = require('../../models/bicicleta')

exports.bicicleta_list = (req, res) => {
  res.status(200).json({
    bicicletas: Bicicleta.allBicicletas
  })
}

exports.bicicleta_create = (req, res) => {
  let bicicleta = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
  bicicleta.ubicacion = [req.body.lat, req.body.lon]
  Bicicleta.add(bicicleta)
  res.status(200).json({
    bicicleta: bicicleta
  })
}

exports.bicicleta_delete = (req, res) => {
  Bicicleta.removeById(req.body.id)
  res.status(204).send()
}