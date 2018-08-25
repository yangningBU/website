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
  },
  coffee: {
    width: '90px',
    marginRight: '10px'
  }
}

const Home = () => (
	<div class={style.home}>
		<h1>Call me <span style={{textDecoration: 'underline', textDecorationStyle: 'dotted'}}>Yonatan</span></h1>
    <p class={style.pronunciation}>/YO-nah-tan/ <FontAwesomeIcon icon='volume-up'/></p>
		<p class={style.tagline}>I build technical solutions that begin with the user experience.</p>
    <SiteLinks />
    <br/>
    <br/>
    <h3 style={s.wrapper}><img src={Typewriter} alt="black and white sketch of a typewriter" style={s.typewriter}/> Sample Projects</h3>
    <ProjectLinks/>
    <h3 style={s.wrapper} class={style.tagline}>
      <img src={CoffeeCup} alt="black and white sketch of a steaming cup of coffee" style={s.coffee}/>Coffee Talk
    </h3>
    <p>I believe in a 2-space indent, doing the dishes, and the Oxford Comma.</p>
	</div>
);

export default Home;
