import './index.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Imc from './components/imc/Imc'
import Office from './components/office/Office'
import Address from './components/address/Address'
import Footer from './components/footer/Footer'
import Intro from './components/intro/Intro'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Imc />
      <Office />
      <Address />
      <Footer />
    </div>
  )
}

export default App
