import React from 'react';
import { NotificationContainer } from 'react-notifications';
import { Navbar, Footer } from './..';

export default class ACMWebPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const {data, children, currentPage} = this.props;
		return (
			<React.Fragment>
				<Navbar data={data} currentPage={currentPage}/>
				<main>
					{children}
				</main>
				<Footer data={data}/>
				<NotificationContainer/>
			</React.Fragment>
		);
	}
}
