import { h, Component } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SiteLinks from '../../components/SiteLinks/SiteLinks';
import ProjectLinks from '../../components/ProjectLinks/ProjectLinks';
import SpinningWheel from '../../assets/images/spinning-wheel.png';
import Typewriter from '../../assets/images/typewriter.png';
import style from './style';

const s = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Times New Roman, serif',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Gloria Hallelujah',
    fontSize: '1.1em'
  },
  typewriter: {
    width: '100px'
  }
}

const Header = () => {
  return (
    <h1 class={style.header} style={s.header}>
      <img src={SpinningWheel} alt="black and white sketch of a typewriter" class={style.logo}/>
      Yonatan Laurence
    </h1>
  );
}


const Home = () => (
  <div class={style.home}>
    <Header/>
    <p class={style.pronunciation}>(/YO-nah-tah-n LAW-rens/)</p>
    <p style={s.wrapper}>
      <img src={Typewriter} alt="black and white sketch of a typewriter" style={s.typewriter}/>
      <span>...</span>
      Sample Projects Coming Soon
    </p>
    
    <SiteLinks />
  </div>
);

export default Home;
