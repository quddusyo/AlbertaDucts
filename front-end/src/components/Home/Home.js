import './Home.css';
import { ServiceData } from './ServiceData';
import InfoFormat from '../InfoFormat';
import homeVideo from '../../assets/albertaducts.mp4';

const Home = () => {
  return (
    <div className='home__container'>
      <div className='home__intro__container'>
        <div
            // play video in background auto play stackoverflw fix
            dangerouslySetInnerHTML={{
              __html: `<video autoPlay loop muted playsinline>
                <source src=${homeVideo} type="video/mp4" />
              </video>`,
            }}
        />
        {/* <video src={ysf_bgvid} autoPlay loop muted></video> */}
        <div className='home__intro__header'>
          <h2>Calgary's trusted,</h2>
          <h2>duct cleaners.</h2>
          <div className='home__intro__subHeader'>
            <h3>Professionals Here For You.</h3>
          </div>
          <div className='home__intro__btns row'>
            <a className='home__intro_btn' href='https://albertaducts.web.app/contact'>get free quote</a>
            <a className='home__intro_btn' href='https://albertaducts.web.app/contact'>book now</a>
          </div>
        </div>
      </div>
      <ul className='service__format'>
        {ServiceData.map((data, id) => (
          <InfoFormat 
            key={id}
            data = {data}
          />
        ))}
      </ul>
      <div className='home__banners'>
        <div className='home__banners__container'>
          <h2>Served 100+</h2>
          <h2>Houses</h2>
          <h2>Across Canada</h2>
        </div>
      </div>
    </div>
  )
}

export default Home