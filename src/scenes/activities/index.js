import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import { ACMWebPage } from '../../components';

class Activity extends React.Component {
	render() {
		const {id, name, poster, description, date} = this.props;
		return (
			<Link className="acm-card" to={`/actividad/${id}`}>
				<h6 className="acm-card_title">{name}</h6>
				<span className="acm-card_date">{date}</span>
				<img className="acm-card_image" src={`data:image/png;base64,${poster}`} alt="Activity" />
				<p className="acm-card_description">{description}</p>
			</Link>
		);
	}
}

export default class ActivitiesScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			type: "all",
			activities: []
		};
	}

	handleInput = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	componentWillMount() {
		this.getActivities();
	}

	getActivities = () => {
		const { host, getActivities } = this.props.data;
		$.ajax({
			type: 'GET',
			url: host + getActivities,
			success: function(response) {
				this.setState({
					'activities': response
				});
			}.bind(this)
		});
	};

	render() {
		const { data } = this.props;
		const { activities, search, type } = this.state;
		return (
			<ACMWebPage data={data} currentPage={3}>
				<header className="acm-cover">
					<h1 className="title">Actividades y eventos</h1>
				</header>
				<form className="acm-inlineform" onSubmit={this.handleSubmit}>
					<input type="text" name="search" value={search} onChange={this.handleInput} />
					<section className="acm-form_inlineChoices">
						<article className="acm-form_choise">
							<input type="radio" name="type" value="all" defaultChecked={type === "all"} id="all" onChange={this.handleInput} />
							<label htmlFor="all">Todos</label>
						</article>
						<article className="acm-form_choise">
							<input type="radio" name="type" value="unfinished" id="unfinished" onChange={this.handleInput} />
							<label htmlFor="unfinished">En curso</label>
						</article>
						<article className="acm-form_choise">
							<input type="radio" name="type" value="finisehd" id="finisehd" onChange={this.handleInput} />
							<label htmlFor="finisehd">Pasados</label>
						</article>
					</section>
				</form>
				<section className="acm-grid">
					{activities.map((activity, i) => {
						if(activity.name.toLowerCase().includes(search.toLowerCase())) {
							return <Activity key={i} {...activity} />
						}
						return null;
					})}
				</section>
			</ACMWebPage>
		);
	}
}
