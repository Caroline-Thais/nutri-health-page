import './index.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Imc from './components/imc/Imc'
import Office from './components/office/Office'
import Address from './components/address/Address'


function App() {

  return (
    <div className="App">
      <Navbar />
      <About />
      <Imc />
      <Office />
      <Address />
    </div>
  )
}

export default App
