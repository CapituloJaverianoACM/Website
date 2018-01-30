import React from 'react';
import { ACMWebPage } from '../../components';

export default class TutorialScene extends React.Component {
	render() {
		const { data, tutorialId } = this.props;
		return (
			<ACMWebPage data={data} currentPage={5}>
				<h1 className="big_title">{tutorialId}</h1>
			</ACMWebPage>
		);
	}
}
