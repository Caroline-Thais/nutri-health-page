import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='nav-header'>
      <img className='logo' src={logo} alt="logo" />
      <ul className='nav-ul'>
        <li>Sobre</li>
        <li>Calcular IMC</li>
        <li>Nossa Clínica</li>
        <li>Contato</li>
      </ul>
    </div>
  )
}

export default Navbar;
