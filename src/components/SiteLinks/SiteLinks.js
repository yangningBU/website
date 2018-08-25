import { h } from 'preact';
import style from './SiteLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconStyle = {
  fontSize: '2em'
}

const Icon = (props) => {
  return <FontAwesomeIcon style={iconStyle} {...props} />;
}

const openPDF = (event) => {
  event.preventDefault();
  window.open('../../assets/files/Yonatan_Laurence-Resume-2018.07.09.pdf');
}

const SiteLinks = () => (
  <ul class={style.links}>
    <li>
      <a href="mailto:laurence0521@gmail.com" target="_alt">
        <Icon icon="envelope-square" color="#4688F1"/>
        Email
      </a>
    </li>
    <li>
      <a href="https://github.com/yangningBU" target="_alt">
        <Icon icon={["fab", "github"]} color="#24292E"/>
        Github
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/yonatan-laurence/" target="_alt">
        <Icon icon={["fab", "linkedin"]} color="#1178B3"/>
        LinkedIn
      </a>
    </li>
    <li>
      <a href="#" onClick={(e) => openPDF(e)} target="download">
        <Icon icon="file-pdf" color="#CC202D"/>
        Resume
      </a>
    </li>
  </ul>
)

export default SiteLinks;