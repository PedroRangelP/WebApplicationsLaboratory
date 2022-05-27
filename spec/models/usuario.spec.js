const mongoDB = require('../../database/mongoConnection')
const Bicicleta = require('../../models/bicicletamongo')
const Usuario = require('../../models/usuariomongo')
const Reserva = require('../../models/reservamongo')

describe('usuarios model', () => {
  beforeAll((done) => {
    mongoDB.connect()
    done()
  })

  afterEach((done) => {
    Reserva.deleteMany({}, function(err, success){
      if(err) console.log(err)
      Usuario.deleteMany({}, function(err, success){
        if(err) console.log(err)
        Bicicleta.deleteMany({}, function(err, success){
            if(err) console.log(err)
            done()
        })
      })
    })
  })

  afterAll((done) => {
    mongoDB.disconnect()
    done()
  })

  describe('un usuario reserva una bicicleta', ()=>{
    it('debe existir la reserva', (done)=>{
      let usuario = new Usuario({nombre: 'Luis', password: 'miSuperPass1287word', email: 'luis@yo.com'})
      usuario.save()
      let bicicleta = new Bicicleta({code: 1, color: 'Rojo', modelo: 'BMX'})
      bicicleta.save()
      let hoy = new Date()
      let mañana = new Date()
      mañana.setDate(hoy.getDate()+1)

      usuario.reservar(bicicleta.id, hoy, mañana, function(err, reserva){
        Reserva.find({}).populate('bicicletas').populate('usuarios').exec(function(err, reservas){
          expect(reservas.length).toBe(1)
          expect(reservas[0].diasDeReserva()).toBe(2)
          expect(reservas[0].bicicleta.code).toBe(1)
          expect(reservas[0].usuario.nombre).toBe(usuario.nombre)
          done()
        })
      })
    })
  })

})