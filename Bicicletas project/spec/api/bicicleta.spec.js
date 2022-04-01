const Bicicleta = require('../../models/bicicleta')
const request = require('request')

describe('Bicicletas API', () => {
  describe('GET Bicicletas', () => {
    it('Status 200', () => {
      expect(Bicicleta.allBicicletas.length).toBe(0)

      let b1 = new Bicicleta(1, 'Rojo', 'BMX', [19.283358657507183, -99.13733333206893])
      Bicicleta.add(b1)

      request.get('http://localhost:3000/api/bicicletas', (error, response, body) => {
        expect(response.statusCode).toBe(200)
      })
    })
  })
})