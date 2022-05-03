const mongoDB = require('../../database/mongoConnection')
const Bicicleta = require('../../models/bicicletamongo')

describe('bicicletas model', () => {
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

  describe('bicicleta.createBicicleta', () => {
    it('crea una instancia de una bicicleta', () => {
      let bicicleta = Bicicleta.createBicicleta(1, 'Rojo', 'BMX', [19.283358657507183, -99.13733333206893])

      expect(bicicleta.code).toBe(1)
      expect(bicicleta.color).toBe('Rojo')
      expect(bicicleta.modelo).toBe('BMX')
      expect(bicicleta.ubicacion[0]).toBe(19.283358657507183)
      expect(bicicleta.ubicacion[1]).toBe(-99.13733333206893)
    })
  })

  describe('bicicleta.allBicicletas', () => {
    it('comienza vacía', (done) => {
      Bicicleta.allBicicletas((err, bicicletas) => {
        expect(bicicletas.length).toBe(0)
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
          expect(bicicletas.length).toEqual(1)
          expect(bicicletas[0].code).toEqual(bicicleta.code)

          done()
        })
      })
    })
  })

  describe('bicicleta.findByCode', () => {
    it('regresa una bicicleta con codigo 1', (done) => {
      Bicicleta.allBicicletas((err, bicicletas) => {
        expect(bicicletas.length).toBe(0)

        let bicicleta1 = new Bicicleta({code: 1, color: 'Rojo', modelo: 'BMX'})
        Bicicleta.add(bicicleta1, (err, newBicicleta) => {
          if(err) console.log(err)
          
          let bicicleta2 = new Bicicleta({code: 2, color: 'Verde', modelo: 'BMX'})
          Bicicleta.add(bicicleta2, (err, newBicicleta) => {
            if(err) console.log(err)

            Bicicleta.findByCode(1, (err, targetBicicleta) => {
              expect(targetBicicleta.code).toBe(bicicleta1.code)
              expect(targetBicicleta.color).toBe(bicicleta1.color)
              expect(targetBicicleta.modelo).toBe(bicicleta1.modelo)

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
        expect(bicicletas.length).toBe(0)

        let bicicleta = new Bicicleta({code: 1, color: 'Rojo', modelo: 'BMX'})
        Bicicleta.add(bicicleta, (err, newBicicleta) => {
          if(err) console.log(err)
          
          Bicicleta.allBicicletas((err, bicicletas) => {
            expect(bicicletas.length).toBe(1)

            Bicicleta.removeByCode(1, (err, cb) => {
              Bicicleta.allBicicletas((err, bicicletas) => {
                expect(bicicletas.length).toBe(0)

                done()
              })
            })
          })
        })
      })
    })
  })

})