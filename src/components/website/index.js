import React, { Component } from 'react';
import { Navbar, Footer, JoinModal } from './..';
import data from './data.json';

export default class Website extends Component {
	constructor(props) {
		super(props);
		this.state = {
			joinModal: false
		};
	}

	toggleJoinModal = (e) => {
		e.preventDefault();
		console.log("Hola " + this.state.joinModal);
		this.setState((prevState) => ({
			joinModal: !prevState.joinModal
		}));
	};

	render() {
		const {joinModal} = this.state;
		return (
			<React.Fragment>
				<Navbar currentPage={0} toggleJoinModal={this.toggleJoinModal}/>
				{joinModal ? <JoinModal toggleJoinModal={this.toggleJoinModal}/> : null}
				<Footer networks={data.networks} developers={data.developers} university={data.university} name={data.name} year={data.year}/>
			</React.Fragment>
		);
	}
}
