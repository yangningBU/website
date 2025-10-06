import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SiteLinks.css';

const iconStyle = {
  fontSize: '2em'
};

const Icon = (props) => <FontAwesomeIcon style={iconStyle} {...props} />;

const openPDF = (event) => {
  event.preventDefault();
  window.open('/30g_YonatanLaurence_Resume_2025_09_30.pdf');
};

const SiteLinks = () => (
  <ul class="links">
    <li>
      <a href="mailto:yonatanlaurence@gmail.com" target="_blank" rel="noopener noreferrer">
        <Icon icon="paper-plane" />
        <span class="label">Email</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/yangningBU" target="_blank" rel="noopener noreferrer">
        <Icon icon={['fab', 'github']} />
        <span class="label">Github</span>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/yonatan-laurence/" target="_blank" rel="noopener noreferrer">
        <Icon icon={['fab', 'linkedin']} />
        <span class="label">LinkedIn</span>
      </a>
    </li>
    <li>
      <a href="#" onClick={openPDF} target="download">
        <Icon icon="file-invoice" />
        <span class="label">Resume</span>
      </a>
    </li>
  </ul>
);

export default SiteLinks;
