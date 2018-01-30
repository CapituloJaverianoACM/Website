import React from 'react';
import { ACMWebPage } from '../../components';

export default class ProjectScene extends React.Component {
	render() {
		const { data, projectId } = this.props;
		return (
			<ACMWebPage data={data} currentPage={4}>
				<h1 className="big_title">{projectId}</h1>
			</ACMWebPage>
		);
	}
}
