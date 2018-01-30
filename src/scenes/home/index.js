import $ from 'jquery';
import React from 'react';
import { NotificationManager } from 'react-notifications';
import { ACMWebPage } from '../../components';
import acmIcon from './acm_icon.png';
import acmChapterIconBlue from './icon_blue.svg';
import acmChapterIconWhite from './icon_white.svg';

class Award extends React.Component {
	render() {
		const {picture, title, date, description} = this.props;
		return (
			<article className="acm-awards_award item">
				<img className="acm-awards_awardpicture" src={picture} alt="Award" />
				<h4 className="acm-awards_awardtitle">{title}</h4>
				<p className="acm-awards_awardyear">{date}</p>
				<p className="acm-awards_awarddescription">{description}</p>
			</article>
		);
	}
}

class Activity extends React.Component {
	render() {
		const {picture, title, description} = this.props;
		return (
			<article className="acm-activities_activity item">
				<section className="acm-activities_activitytext">
					<h3>{title}</h3>
					<p>{description}</p>
				</section>
				<section className="acm-activities_activityimage">
					<img src={picture} alt="Activity" />
				</section>
			</article>
		);
	}
}

class Project extends React.Component {
	render() {
		const {picture, title} = this.props;
		return (
			<article className="acm-projects_project">
				<img className="acm-projects_projectpicture" src={picture} alt="Project" />
				<h5 className="acm-projects_projecttitle">{title}</h5>
			</article>
		);
	}
}

export default class HomeScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			awards: [],
			activities: [],
			projects: []
		};
	}

	getAwards = () => {
		$.ajax({
			type: 'POST',
			url: '',
			success: function(response) {
				console.log(this.state);
				this.setState({
					awards: response.awards
				});
			}.bind(this)
		});
	};

	getActivities = () => {
		$.ajax({
			type: 'POST',
			url: '',
			success: function(response) {
				console.log(this.state);
				this.setState({
					activities: response.activities
				});
			}.bind(this)
		});
	};

	getProjects = () => {
		$.ajax({
			type: "POST",
			url: "https://127.0.0.1:8000/sendQuestionEmail/",
			data: this.state,
			timeout: 2000,
			success: function(response) {
				NotificationManager.success("message", "title", 5000);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				NotificationManager.error("Parece que algo salio mal", textStatus, 5000);
			}
		});
	};

	render() {
		const {data} = this.props;
		const {queEsACM, queEsCapituloACM} = data;
		const {awards, activities, projects} = this.state;

		return (
			<ACMWebPage data={data} currentPage={0}>
				<header className="acm-maincover">
					<img src={acmChapterIconWhite} alt="ACM chapter logo" className="acm-maincover_logo"/>
					<h1 className="title">Capítulo Javeriano ACM</h1>
				</header>
				<section className="acm-full-section acm-aboutus">
					<section className="acm-aboutus_content">
						<article className="acm-aboutus_section">
							<img className="acm-aboutus_picturesection" src={acmIcon} alt="ACM logo"/>
							<h2 className="sub_title acm-aboutus_titlesection">¿Qué es ACM?</h2>
							<p className="acm-aboutus_textsection">{queEsACM}</p>
						</article>
						<article className="acm-aboutus_section">
							<img className="acm-aboutus_picturesection" src={acmChapterIconBlue} alt="ACM chapter logo"/>
							<h2 className="sub_title acm-aboutus_titlesection">¿Qué es el capítulo?</h2>
							<p className="acm-aboutus_textsection">{queEsCapituloACM}</p>
						</article>
					</section>
				</section>
				{awards.length > 0 &&
					<section className="acm-full-section">
						<h1 className="sub_title acm-section_title">¿Qué hemos ganado?</h1>
						<section className="acm-awards">
							{awards.map((award, i) => {
								return <Award key={i} {...award}/>;
							})}
						</section>
					</section>
				}
				{activities.length > 0 &&
					<section className="acm-full-section">
						<h1 className="sub_title acm-section_title">Actividades del capítulo</h1>
						<section className="acm-activities">
							{activities.map((activity, i) => {
								return <Activity key={i} {...activity}/>;
							})}
						</section>
					</section>
				}
				{projects.length > 0 &&
					<section className="acm-full-section">
						<h1 className="sub_title acm-section_title">Nuestros proyectos</h1>
						<section className="acm-projects">
							<section className="acm-projectscontent">
								{projects.map((project, i) => {
									return <Project key={i} {...project}/>;
								})}
							</section>
						</section>
					</section>
				}
			</ACMWebPage>
		);
	}
}
