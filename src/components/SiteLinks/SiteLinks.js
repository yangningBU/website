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
  window.open('../../assets/files/YonatanLaurence_Resume_2018-09-05.pdf');
}

const SiteLinks = () => (
  <ul class={style.links}>
    <li>
      <a href="mailto:laurence0521@gmail.com" target="_alt">
        <Icon icon="paper-plane"/>
        Email
      </a>
    </li>
    <li>
      <a href="https://github.com/yangningBU" target="_alt">
        <Icon icon={["fab", "github"]}/>
        Github
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/yonatan-laurence/" target="_alt">
        <Icon icon={["fab", "linkedin"]}/>
        LinkedIn
      </a>
    </li>
    <li>
      <a href="#" onClick={openPDF} target="download">
        <Icon icon="file-pdf"/>
        Resume
      </a>
    </li>
  </ul>
)

export default SiteLinks;