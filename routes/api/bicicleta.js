let express = require('express')
let router = express.Router()
let bicicletaAPI = require('../../controllers/api/bicicletaAPI')

//API GET, obtener todas las bicicletas
router.get('/', bicicletaAPI.bicicleta_list)

//API POST, crear bicicleta
router.post('/create', bicicletaAPI.bicicleta_create)

//API POST, eliminar bicicleta
router.post('/delete', bicicletaAPI.bicicleta_delete)

module.exports = router