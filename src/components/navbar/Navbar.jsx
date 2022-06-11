import './navbar.css'
import logo from '../../assets/logo.png'
import photo from '../../assets/photo.jpg'

const Navbar = () => {
  return (
    <div>
      <div className='nav-header'>
        <img className='logo' src={logo} alt="logo" />
        <ul className='nav-ul'>
          <li>Sobre</li>
          <li>Calcular IMC</li>
          <li>Nossa Clínica</li>
          <li>Contato</li>
        </ul>
      </div>

      <div className='about'>
        <img className='photo' src={photo} alt="black woman standing wearing a white doctor's colt" />
      </div>


    </div>
  )
}

export default Navbar;
