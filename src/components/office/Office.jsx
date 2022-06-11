import './office.css'
import Clinica1 from '../../assets/clinica1.png'

const Office = () => {
  return (
    <div className='main-office'>
      <h4>Nossa Clínica</h4>
      <img className='office-pic' src={Clinica1} alt="reception of an office space" />
      <p>Localizada no centro de Belo Horizonte temos um ambiente agradável para nossos clientes. Queremos proporcionar uma experiência que começa desde a recepção.</p>
    </div>
  )
}

export default Office;