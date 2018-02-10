import React from 'react';
import { NotificationContainer } from 'react-notifications';
import { Navbar, Footer, JoinModal } from './..';

export default class ACMWebPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			joinModal: false
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	toggleJoinModal = (e) => {
		e.preventDefault();
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
						<Footer data={data}/>
					</React.Fragment>
				}
				<NotificationContainer/>
			</React.Fragment>
		);
	}
}
