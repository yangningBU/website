import SiteLinks from '../../components/SiteLinks.jsx';
import Crystal from '../../assets/crystal.svg';
import './style.css';

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
