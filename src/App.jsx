import './App.css'
import Tela01 from './components/Tela01'
import Tela02 from './components/Tela02'
import Tela03 from './components/Tela03'
import Tela04 from './components/Tela04'

function App() {
  return (
    <>
      <Tela01 status="online" />
      <Tela01 status="offline" />
      <Tela02 type="sucess" />
      <Tela02 type="error" />
      <Tela03 />
      <Tela04 texto="Clique aqui!" />
    </>
  )
}

export default App
