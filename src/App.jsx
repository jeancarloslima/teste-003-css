import './App.css'
import Tela01 from './components/Tela01'
import Tela02 from './components/Tela02'
import Tela03 from './components/Tela03'
import Tela04 from './components/Tela04'
import Tela05 from './components/Tela05'

function App() {
  return (
    <div className='app'>
      <Tela01 status="online" />
      <Tela01 status="offline" />
      <Tela02 type="sucess" />
      <Tela02 type="error" />
      <Tela03 />
      <Tela04 texto="Clique aqui!" />
      <Tela05 />
    </div>
  )
}

export default App
