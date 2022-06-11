import './about.css'
import photo from '../../assets/photo.png'

const About = () => {
  return (
    <div>
      <div className='about'>
        <img className='photo' src={photo} alt="black woman standing wearing a white doctor's colt" height="200em" />
        <h4>Camila Scheffer</h4>
        <p>Graduada pela Unifei, mestra em nutrição esportiva pela Faculdade Ciências Médicas, Camila tem ajudado centenas de pacientes a atingirem seus objetivos, tendo como foco a saúde além da estética. </p>
      </div>
    </div>
  )
}

export default About;