import './intro.css'
import food from '../../assets/foodimage.jpg'

const Intro = () => {
  return (
    <div>
      <div className='intro-header'>
        <h2>Emagrecimento | <br />
          Ganho de Massa Muscular</h2>
        <p>Nutri Health -Clínica de Nutrição</p>
        <img src={food} alt="" />
      </div>
    </div>
  )
}

export default Intro;