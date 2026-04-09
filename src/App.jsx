import './App.css'
import Tela01 from './components/Tela01'
import Tela02 from './components/Tela02'

function App() {
  return (
    <>
      <Tela01 status="online" />
      <Tela01 status="offline" />
      <Tela02 type="sucess" />
      <Tela02 type="error" />
    </>
  )
}

export default App
