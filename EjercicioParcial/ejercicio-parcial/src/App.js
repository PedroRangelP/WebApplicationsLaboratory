import './App.css'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header />
      <MainContent cards={cards_ids(13)}/>
      <Footer />
    </>
  );
}

const cards_ids = (max) => {
  let ids = []

  for (let i=0; i<max; i++) ids.push(i)

  return ids
}

export default App
