import React from 'react';
import { ACMWebPage } from '../../components';

export default class ActivityScene extends React.Component {
	render() {
		const { data, activityId } = this.props;
		return (
			<ACMWebPage data={data} currentPage={3}>
				<h1 className="big_title">{activityId}</h1>
			</ACMWebPage>
		);
	}
}
