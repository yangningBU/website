import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for pages
import Home from '../pages/home';
import Fallback from '../pages/fallback';

// Instantiate icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faFilePdf, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faPaperPlane, faFilePdf, faVolumeUp);

export default class App extends Component {
  
  /** Gets fired when the route changes.
   *  @param {Object} event      "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Fallback default />
        </Router>
      </div>
    );
  }
}
