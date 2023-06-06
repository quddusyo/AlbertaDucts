import { ServiceData } from '../Home/ServiceData';
import InfoFormat from '../InfoFormat';
import servicesImg from '../../assets/beforeafter.png';

const Services = ({ data }) => {
  return (
    <div className='section__container'>
        <div className='section__title'>
          <h2>services</h2>
        </div>
        <div className='section__image'>
          <img src={servicesImg} alt='before after ducts' />
        </div>
        <div className='service__format'>
        {ServiceData.map((data, id) => (
          <InfoFormat 
            key={id}
            data = {data}
          />
        ))}
      </div>
      <p>If you have already gotten your service <a href='/services/store'>click here</a> to pay online.</p>
    </div>
  )
}

export default Services