let operaciones = require('./operaciones')
let readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let prompt = (pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, (input) => resolve(Number(input)))
  })
}

let leerNumeros = async () => {
  let a = await prompt("a: "), b = await prompt("b: ")

  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b))
      reject("Entrada no válida\n")
    else
      resolve({a, b})
  })
}

let calculadora = async () => {
  console.log(`
  Seleccione una opción:
  1) suma
  2) resta
  3) producto
  4) división
  5) módulo
  6) salir
  `)

  let repetir = true;
  
  while(repetir) {
    let opcion = await prompt("Opción: ")
  
    switch (opcion) {
      case 1:
        await leerNumeros().then((numeros) => {
          console.log(`Resultado: ${operaciones.suma(numeros.a,numeros.b)}\n`)
        }, (error) => {console.log(error)}); break
      
      case 2:
        await leerNumeros().then((numeros) => {
          console.log(`Resultado: ${operaciones.resta(numeros.a,numeros.b)}\n`)
        }, (error) => {console.log(error)}); break

      case 3:
        await leerNumeros().then((numeros) => {
          console.log(`Resultado: ${operaciones.producto(numeros.a,numeros.b)}\n`)
        }, (error) => {console.log(error)}); break

      case 4:
        await leerNumeros().then((numeros) => {
          console.log(`Resultado: ${operaciones.division(numeros.a,numeros.b)}\n`)
        }, (error) => {console.log(error)}); break

      case 5:
        await leerNumeros().then((numeros) => {
          console.log(`Resultado: ${operaciones.modulo(numeros.a,numeros.b)}\n`)
        }, (error) => {console.log(error)}); break

      case 6:
        repetir = false; break
        
      default:
        console.log("Opción no válida\n"); 
    }
  }

  process.exit()
}

calculadora()
