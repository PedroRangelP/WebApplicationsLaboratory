let express = require('express')
let router = express.Router()
let bicicletaController = require('../controllers/bicicleta')

//Mostrar las bicicletas
router.get('/', bicicletaController.bicicleta_list)

//Añadir bicicleta
router.get('/create', bicicletaController.bicicleta_create_get)
router.post('/create', bicicletaController.bicicleta_create_post)

//Remover bicicleta
router.post('/:id/delete', bicicletaController.bicicleta_delete_post)

//Actualizar bicicleta
router.get('/:id/update', bicicletaController.bicicleta_update_get)
router.post('/:id/update', bicicletaController.bicicleta_update_post)

module.exports = router