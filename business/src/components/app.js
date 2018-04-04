import { h, Component } from 'preact';

import Home from './home/home';
import Gallery from './gallery/gallery';
import Modal from './modal/modal';
// import Home from 'async!../routes/home';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			modalOptions: null
		};
	}

	openModal = (options) => {
		this.setState({
			isModalOpen: true,
			modalOptions: options
		});
	}

	closeModal = () => {
		this.setState({
			isModalOpen: false,
			modalOptions: null
		});
	}

	render() {
		return (
			<div id="app">
				<Home openModal={this.openModal}/>
				<Gallery />
				{
					this.state.isModalOpen ? <Modal title={this.state.modalOptions.title} category={this.state.modalOptions.category} onClose={this.closeModal}/> : null
				}
			</div>
		);
	}
}
