const mongoDB = require('../database/mongoConnection')
const Bicicleta = require('../models/bicicletamongo')
const expect = require('chai').expect

describe('bicicleta model', () => {
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

  describe('bicicleta.createBicicleta', () => {
    it('crea una instancia de una bicicleta', () => {
      let bicicleta = Bicicleta.createBicicleta(1, 'Rojo', 'BMX', [19.283358657507183, -99.13733333206893])

      expect(bicicleta.code).to.equal(1)
      expect(bicicleta.color).to.equal('Rojo')
      expect(bicicleta.modelo).to.equal('BMX')
      expect(bicicleta.ubicacion[0]).to.equal(19.283358657507183)
      expect(bicicleta.ubicacion[1]).to.equal(-99.13733333206893)
    })
  })

  describe('bicicleta.allBicicletas', () => {
    it('comienza vacía', (done) => {
      Bicicleta.allBicicletas((err, bicicletas) => {
        expect(bicicletas.length).to.equal(0)
        done()
      })
    })
  })

  describe('bicicletas.add', () => {
    it('agrega una bicicleta', (done) => {
      let bicicleta = new Bicicleta({code: 1, color: 'Rojo', modelo: 'BMX'})
      Bicicleta.add(bicicleta, (err, newBicicleta) => {
        if(err) console.log(err)
        Bicicleta.allBicicletas((err, bicicletas) => {
          expect(bicicletas.length).to.equal(1)
          expect(bicicletas[0].code).to.equal(bicicleta.code)

          done()
        })
      })
    })
  })

  describe('bicicleta.findByCode', () => {
    it('regresa una bicicleta con codigo 1', (done) => {
      Bicicleta.allBicicletas((err, bicicletas) => {
        expect(bicicletas.length).to.equal(0)

        let bicicleta1 = new Bicicleta({code: 1, color: 'Rojo', modelo: 'BMX'})
        Bicicleta.add(bicicleta1, (err, newBicicleta) => {
          if(err) console.log(err)
          
          let bicicleta2 = new Bicicleta({code: 2, color: 'Verde', modelo: 'BMX'})
          Bicicleta.add(bicicleta2, (err, newBicicleta) => {
            if(err) console.log(err)

            Bicicleta.findByCode(1, (err, targetBicicleta) => {
              expect(targetBicicleta.code).to.equal(bicicleta1.code)
              expect(targetBicicleta.color).to.equal(bicicleta1.color)
              expect(targetBicicleta.modelo).to.equal(bicicleta1.modelo)

              done()
            })
          })
        })
      })
    })
  })

  describe('bicicleta.removeBycode', () => {
    it('borra bicicleta con codigo 1', (done) => {
      Bicicleta.allBicicletas((err, bicicletas) => {
        expect(bicicletas.length).to.equal(0)

        let bicicleta = new Bicicleta({code: 1, color: 'Rojo', modelo: 'BMX'})
        Bicicleta.add(bicicleta, (err, newBicicleta) => {
          if(err) console.log(err)
          
          Bicicleta.allBicicletas((err, bicicletas) => {
            expect(bicicletas.length).to.equal(1)

            Bicicleta.removeByCode(1, (err, cb) => {
              Bicicleta.allBicicletas((err, bicicletas) => {
                expect(bicicletas.length).to.equal(0)

                done()
              })
            })
          })
        })
      })
    })
  })

})