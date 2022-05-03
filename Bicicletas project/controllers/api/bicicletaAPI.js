const Bicicleta = require('../../models/bicicletamongo')

exports.bicicleta_list = (req, res) => {
  Bicicleta.allBicicletas((err, bicicletas) => {
    res.status(200).json({
      bicicletas: bicicletas
    })
  })
}

exports.bicicleta_create = (req, res) => {
  let bicicleta = Bicicleta.createBicicleta(req.body.code, req.body.color, req.body.modelo, [req.body.lat, req.body.lon])
  Bicicleta.add(bicicleta, (err, newBicicleta) => {
    res.status(200).json({
      bicicleta: newBicicleta
    })
  })
}

exports.bicicleta_delete = (req, res) => {
  Bicicleta.removeByCode(req.body.code, (err, cb) => {
    res.status(204).send()
  })
}