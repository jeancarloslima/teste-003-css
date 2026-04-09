import './App.css'
import Tela01 from './components/Tela01'

function App() {
  return (
    <>
      <Tela01 status="online" />
      <Tela01 status="offline" />
    </>
  )
}

export default App
