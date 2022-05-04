const mongoDB = require('../database/mongoConnection')
const Bicicleta = require('../models/bicicletamongo')
const request = require('request')
const expect = require('chai').expect
let base_url = 'http://localhost:3000/api/bicicletas/'

describe('bicicleta API', () => {
  before((done) => {
    mongoDB.connect()
    done()
  })

  afterEach((done) => {
    Bicicleta.deleteMany({}, (err, success) => {
      if (err) console.log(err)
      done()
    })
  })

  after((done) => {
    done()
  })

  describe('GET BICICLETAS /', () => {
    it('Status 200', (done) => {
      request.get(base_url, function(error, response, body) {
        let res = JSON.parse(body)
        expect(response.statusCode).to.equal(200)
        expect(res.bicicletas.length).to.equal(0)
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
        expect(response.statusCode).to.equal(200)
        let bicicletaRes = JSON.parse(body).bicicleta
        expect(bicicletaRes.color).to.equal('Rojo')
        expect(bicicletaRes.ubicacion[0]).to.equal(-99.13)
        expect(bicicletaRes.ubicacion[1]).to.equal(19.28)
        done()
      })
    })
  })

})