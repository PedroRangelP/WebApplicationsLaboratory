const expect = require('chai').expect
const BicicletaDB = require('../models/bicicletadb')

describe('DB Test', () => {
  it('Agregar una bicicleta', () => {
    BicicletaDB.add('Rojo', 'BMX', 19.283358657507183, -99.13733333206893)
      .then((result) => {
        expect(result).to.equal(2)
      })
  })

  it('Devolver bicicleta con id = 1', () => {
    BicicletaDB.findById(1)
      .then((result) => {
        let bicicleta = result[0]
        expect(bicicleta.id).to.equal(1)
      })
  })
})
