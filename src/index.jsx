import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import Home from '@/pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

// Instantiate icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faFilePdf, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faPaperPlane, faFilePdf, faVolumeUp);

export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
