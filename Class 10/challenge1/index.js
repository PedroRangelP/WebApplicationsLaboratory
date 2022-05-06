/*
Challenge 1
Crea un 'custom component' llamado Page
Deberá regresar una lista desordenada (<ul>) con 4 razones por las que crees que es importante aprender React.
Añade en algún lugar el logo de React (incluído en la carpeta)

'Renderea' el componente en la página.

*/

const Page = () => {
  return (
    <div>
      <ul>
        <li>Es de código abierto y tiene una comunidad sólida</li>
        <li>JSX permite estructurar mejor los componentes</li>
        <li>Diseño modular</li>
        <li>Parte de JavaScript</li>
      </ul>
      <img src="./react.svg"/>
    </div>
    
  )
}

ReactDOM.render(
  <React.Fragment>
    <Page />
  </React.Fragment>,
  document.getElementById("root")
)
