import React from 'react';
import { Navbar, Footer, JoinModal } from './..';

export default class ACMWebPage extends React.Component {
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
		const {data, children, currentPage} = this.props;
		return (
			<React.Fragment>
				{ joinModal && <JoinModal toggleJoinModal={this.toggleJoinModal}/> }
				{ !joinModal &&
					<React.Fragment>
						<Navbar currentPage={currentPage} toggleJoinModal={this.toggleJoinModal}/>
						<main>
							{children}
						</main>
						<Footer networks={data.networks} developers={data.developers} university={data.university} name={data.name} year={data.year}/>
					</React.Fragment>
				}
			</React.Fragment>
		);
	}
}
