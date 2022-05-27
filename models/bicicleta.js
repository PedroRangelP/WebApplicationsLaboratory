function Bicicleta(id, color, modelo, ubicacion)  {
  this.id = id
  this.color = color
  this.modelo = modelo
  this.ubicacion = ubicacion
}

Bicicleta.allBicicletas = []

Bicicleta.add = (bicicleta) => {
  Bicicleta.allBicicletas.push(bicicleta)
}

Bicicleta.findById = (id) => {
  let bicicleta = Bicicleta.allBicicletas.find(x => x.id == id)

  if(bicicleta)
    return bicicleta
  else
    throw new Error(`No existe la bicicleta con el id ${id}`)
}

Bicicleta.removeById = (id) => {
  for(let i=0; i<Bicicleta.allBicicletas.length; i++) {
    if(Bicicleta.allBicicletas[i].id == id) {
      Bicicleta.allBicicletas.splice(i,1)
      break
    }
  }
}

//Bicicletas
let b1 = new Bicicleta(1, 'Rojo', 'BMX', [19.283358657507183, -99.13733333206893])
let b2 = new Bicicleta(2, 'Blanca', 'Benotto', [19.28585704642429, -99.13522329713123])
//Bicicleta.add(b1)
//Bicicleta.add(b2)

module.exports = Bicicleta