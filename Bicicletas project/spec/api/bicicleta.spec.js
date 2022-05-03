const mongoDB = require('../../database/mongoConnection')
const Bicicleta = require('../../models/bicicletamongo')
const request = require('request')
let base_url = 'http://localhost:3000/api/bicicletas/'

describe('bicicletas API', () => {
  beforeAll((done) => {
    mongoDB.connect()
    done()
  })

  afterEach((done) => {
    Bicicleta.deleteMany({}, (err, success) => {
      if (err) console.log(err)
      done()
    })
  })

  afterAll((done) => {
    mongoDB.disconnect()
    done()
  })

  describe('GET BICICLETAS /', () => {
    it('Status 200', (done) => {
      request.get(base_url, function(error, response, body) {
        let res = JSON.parse(body)
        expect(response.statusCode).toBe(200)
        expect(res.bicicletas.length).toBe(0)
        done()
      })
    })
  })

  describe('POST BICICLETA /create', () => {
    it('Status 200', (done) => {
      let headers = {'content-type' : 'application/json'}
      let bicicleta = '{"code" : 1, "color": "Rojo", "modelo": "BMX", "lat": -99.13, "lon": 19.28}'
      request.post({
        headers: headers,
        url: base_url + 'create',
        body: bicicleta
      }, (error, response, body) => {
        expect(response.statusCode).toBe(200)
        let bicicletaRes = JSON.parse(body).bicicleta
        expect(bicicletaRes.color).toBe('Rojo')
        expect(bicicletaRes.ubicacion[0]).toBe(-99.13)
        expect(bicicletaRes.ubicacion[1]).toBe(19.28)
        done()
      })
    })
  })

  describe('POST BICICLETA /delete', () => {
    it('Status 200', (done) => {
      let headers = {'content-type' : 'application/json'}
      let bicicleta = '{"code" : 1, "color": "Rojo", "modelo": "BMX", "lat": -99.13, "lon": 19.28}'
      request.post({
        headers: headers,
        url: base_url + 'create',
        body: bicicleta
      }, (error, response, body) => {
        request.post({
          headers: headers,
          url: base_url + 'delete',
          body: '{"code" : 1}'
        }, (error, response, body) => {
          expect(response.statusCode).toBe(204)
          
          request.get(base_url, function(error, response, body) {
            let res = JSON.parse(body)
            expect(response.statusCode).toBe(200)
            expect(res.bicicletas.length).toBe(0)
            done()
          })
        })
      })
    })
  })

})