import React, { Component } from 'react';
import { Footer } from './..';
import data from './data.json';

export default class Website extends Component {
	render() {
		return (
			<React.Fragment>
				<Footer networks={data.networks} developers={data.developers} university={data.university} name={data.name} year={data.year}/>
			</React.Fragment>
		);
	}
}
