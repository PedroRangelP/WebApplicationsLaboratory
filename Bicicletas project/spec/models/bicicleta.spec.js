const Bicicleta = require('../../models/bicicleta')

beforeEach(() => {
  Bicicleta.allBicicletas = []
})

describe('Bicicleta.allBicicletas', () => {
  it('Comienza vacía', () => {
    expect(Bicicleta.allBicicletas.length).toBe(0)
  })
})

describe('Bicicleta.add', () => {
  it('Agregar una bicicleta', () => {
    expect(Bicicleta.allBicicletas.length).toBe(0)
    let b1 = new Bicicleta(1, 'Rojo', 'BMX', [19.283358657507183, -99.13733333206893])
    Bicicleta.add(b1)
    expect(Bicicleta.allBicicletas.length).toBe(1)
    expect(Bicicleta.allBicicletas[0]).toBe(b1)
  })
})

describe('Bicicleta.findById', () => {
  it('Devolver bicicleta con id = 1', () => {
    expect(Bicicleta.allBicicletas.length).toBe(0)
    let b1 = new Bicicleta(1, 'Rojo', 'BMX', [19.283358657507183, -99.13733333206893])
    let b2 = new Bicicleta(2, 'Blanca', 'Benotto', [19.28585704642429, -99.13522329713123])
    Bicicleta.add(b1)
    Bicicleta.add(b2)

    let target = Bicicleta.findById(1)
    expect(target.id).toBe(1)
    expect(target.color).toBe(b1.color)
    expect(target.modelo).toBe(b1.modelo)
  })
})

describe('Bicicleta.removeById', () => {
  it('Eliminar bicicleta con id = 1', () => {
    expect(Bicicleta.allBicicletas.length).toBe(0)
    let b1 = new Bicicleta(1, 'Rojo', 'BMX', [19.283358657507183, -99.13733333206893])
    Bicicleta.add(b1)
    Bicicleta.removeById(1)
    expect(Bicicleta.allBicicletas.length).toBe(0)
  })
})