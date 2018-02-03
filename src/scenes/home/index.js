import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { ACMWebPage } from '../../components';
import acmIcon from './acm_icon.png';
import acmChapterIconBlue from './icon_blue.svg';
import acmChapterIconWhite from './icon_white.svg';

class AboutSection extends React.Component {
	render() {
		const { icon, title, text } = this.props;
		return (
			<article className="acm-aboutus_section">
				<img className="acm-aboutus_picturesection" src={icon} alt="ACM logo"/>
				<section className="acm-aboutus_contentsection">
					<h2 className="sub_title acm-aboutus_titlesection">{title}</h2>
					<p className="acm-aboutus_textsection">{text}</p>
				</section>
			</article>
		);
	}
}

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
		const {picture, id, title} = this.props;
		return (
			<Link to={`/actividad/${id}`} className="acm-grid_element">
				<img className="acm-grid_elementpicture" src={picture} alt="Project" />
				<h5 className="acm-grid_elementtitle">{title}</h5>
			</Link>
		);
	}
}

class Project extends React.Component {
	render() {
		const {picture, id, title} = this.props;
		return (
			<Link to={`/proyecto/${id}`} className="acm-grid_element">
				<img className="acm-grid_elementpicture" src={picture} alt="Project" />
				<h5 className="acm-grid_elementtitle">{title}</h5>
			</Link>
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

	componentDidMount() {
		this.getAwards();
	}

	getAwards = () => {
		$.ajax({
			type: 'POST',
			url: this.props.data.host + "/awards",
			success: function(response) {
				console.log(this.state);
				this.setState({
					awards: response
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
					<AboutSection icon={acmIcon} title="¿Qué es ACM?" text={queEsACM} />
					<AboutSection icon={acmChapterIconBlue} title="¿Qué es el capítulo?" text={queEsCapituloACM} />
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
							<section className="acm-grid-5 style-2">
								{activities.map((activity, i) => {
									return <Activity key={i} {...activity}/>;
								})}
							</section>
						</section>
					</section>
				}
				{projects.length > 0 &&
					<section className="acm-full-section">
						<h1 className="sub_title acm-section_title">Nuestros proyectos</h1>
						<section className="acm-projects">
							<section className="acm-grid-5 style-1">
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
