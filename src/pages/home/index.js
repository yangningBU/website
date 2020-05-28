import { h } from 'preact';
import SiteLinks from '../../components/SiteLinks/SiteLinks';
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
    <h1 class={style.header} style={s.header}>Yonatan | yony</h1>
  );
}


const Home = () => (
  <div class={style.home}>
    <Header/>
    <div class="flex-center">
      <a href="https://opposition.services" target="_alt">
        <img src={Typewriter} alt="typewriter" style={s.typewriter}/>
      </a>
    </div>
    <SiteLinks />
  </div>
);

export default Home;
