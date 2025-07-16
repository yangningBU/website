import { h } from 'preact';
import SiteLinks from '../../components/SiteLinks/SiteLinks';
import Crystal from '../../assets/images/crystal.svg';
import style from './style';

const Home = () => (
  <div class="home">
    <h1>Yonatan | yony</h1>
    <div class="flex-center">
      <img src={Crystal} alt="pink crystal logo" class="logo"/>
    </div>
    <SiteLinks />
  </div>
);

export default Home;
