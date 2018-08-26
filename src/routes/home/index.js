import { h, Component } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SiteLinks from '../../components/SiteLinks/SiteLinks';
import ProjectLinks from '../../components/ProjectLinks/ProjectLinks';
import CoffeeCup from '../../assets/images/coffee-cup.png';
import Typewriter from '../../assets/images/typewriter.png';
import style from './style';

const s = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    fontFamily: 'Gloria Hallelujah',
    fontSize: '1.4em'
  },
  typewriter: {
    width: '100px'
  }
}

const Home = () => (
  <div class={style.home}>
    <h1>Call me Yonatan</h1>
    <p class={style.pronunciation}>(/YO-nah-tah-n/)</p>
    <h3 style={s.wrapper}>
      <img src={Typewriter} alt="black and white sketch of a typewriter" style={s.typewriter}/>
      Sample Projects
    </h3>
    <ProjectLinks/>
    <SiteLinks />
  </div>
);

export default Home;
