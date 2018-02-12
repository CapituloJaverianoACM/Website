import $ from 'jquery';
import React from 'react';
import { ACMWebPage } from '../../components';

export default class ActivityScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 1,
			name: "Taller Django",
			date: "08 febrero del 2018",
			time: "6:00 pm - 8:00 pm",
			place: "Sala de bases de datos",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sodales ex ut blandit. Nulla interdum viverra erat, vel convallis nisi interdum ac.",
			poster: "http://www.techspire.net/wp-content/uploads/2016/11/python-django-logo.jpg",
			information: ""
		};
	}

	componentDidMount() {
		const { host, getActivity } = this.props.data;
		this.get(host + getActivity + this.props.activityId + "/");
	}

	get = (url, type = 'GET') => {
		$.ajax({
			type: type,
			url: url,
			success: function(response) {
				this.setState(response);
			}.bind(this)
		});
	};

	render() {
		const { data } = this.props;
		const { name, date, time, place, information } = this.state;
		return (
			<ACMWebPage data={data} currentPage={3}>
				<section className="maincontent acm-page">
					<section className="acm-page-info">
						<header className="acm-activity-cover acm-page-header">
							<h1 className="sub_title">{name}</h1>
							<button className="acm acm-user-plus acm-join-button">Inscribirme</button>
						</header>
						<section className="acm-page-content">
							<span className="icon acm acm-calendar">{date}</span>
							<span className="icon acm acm-clock-o">{time}</span>
							<span className="icon acm acm-map-marker">{place}</span>
						</section>
					</section>
					<section className="acm-page-content">
						<section>
							{information}
						</section>
					</section>
				</section>
			</ACMWebPage>
		);
	}
}
