import { h } from 'preact';
import style from './SiteLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconStyle = {
  fontSize: '2em'
};

const Icon = (props) => <FontAwesomeIcon style={iconStyle} {...props} />;

const openPDF = (event) => {
  event.preventDefault();
  window.open('/assets/files/30g_YonatanLaurence_Resume_2025_09_30.pdf');
};

const SiteLinks = () => (
  <ul class={style.links}>
    <li>
      <a href="mailto:yonatanlaurence@gmail.com">
        <Icon icon="paper-plane" />
        <span class={style.label}>Email</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/yangningBU">
        <Icon icon={['fab', 'github']} />
        <span class={style.label}>Github</span>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/yonatan-laurence/">
        <Icon icon={['fab', 'linkedin']} />
        <span class={style.label}>LinkedIn</span>
      </a>
    </li>
    <li>
      <a href="#" onClick={openPDF} target="download">
        <Icon icon="file-pdf" />
        <span class={style.label}>Resume</span>
      </a>
    </li>
  </ul>
);

export default SiteLinks;
