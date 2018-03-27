import { h, Component } from 'preact';

import Home from './home/home';
import Gallery from './gallery/gallery';
// import Home from 'async!../routes/home';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Home />
				<Gallery />
			</div>
		);
	}
}
