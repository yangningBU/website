import { h } from 'preact';
import SiteLinks from '../../components/SiteLinks/SiteLinks';
import Crystal from '../../assets/images/crystal.svg';
import './style';

const Home = () => (
  <div class="home">
    <div class="flex-center">
      <img src={Crystal} alt="pink crystal logo" class="logo" />
    </div>
    <h1>Yonatan | yony</h1>
    <SiteLinks />
  </div>
);

export default Home;
