import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Project from '../routes/project';

// Instantiate icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faFilePdf, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faPaperPlane, faFilePdf, faVolumeUp);

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	// <Profile path="/profile/" user="me" />
	// <Profile path="/profile/:user" />

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Project path="/project/:letter" />
				</Router>
			</div>
		);
	}
}
