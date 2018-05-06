import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import { ACMWebPage, Slider } from '../../components';
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
					<h1 className="acm-aboutus_titlesection">{title}</h1>
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
				<img className="acm-awards_awardpicture" src={`data:image/png;base64,${picture}`} alt="Award" />
				<h4 className="acm-awards_awardtitle">{title}</h4>
				<p className="acm-awards_awardyear">{date}</p>
				<p className="acm-awards_awarddescription">{description}</p>
			</article>
		);
	}
}

class Activity extends React.Component {
	render() {
		const {id, name, poster, description} = this.props;
		return (
			<Link to={`/actividad/${id}`} className="acm-grid_element">
				<img className="acm-grid_elementpicture" src={`data:image/png;base64,${poster}`} alt="Project" />
				<section className="acm-grid-elementinfo">
					<h5 className="acm-grid_elementtitle">{name}</h5>
					<p className="acm-grid-elementdescription">{description}</p>
				</section>
			</Link>
		);
	}
}

class Project extends React.Component {
	render() {
		const {id, name, poster, description} = this.props;
		return (
			<Link to={`/proyecto/${id}`} className="acm-grid_element">
			<img className="acm-grid_elementpicture" src={`data:image/png;base64,${poster}`} alt="Project" />
			<section className="acm-grid-elementinfo">
				<h5 className="acm-grid_elementtitle">{name}</h5>
				<p className="acm-grid-elementdescription">{description}</p>
			</section>
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
		const { host, getAwards, getActivities, getProjects } = this.props.data;
		this.get('awards', host + getAwards);
		this.get('activities', host + getActivities);
		this.get('projects', host + getProjects);
	}

	get = (object, url, type = 'GET') => {
		$.ajax({
			type: type,
			url: url,
			success: function(response) {
				this.setState({
					[object]: response
				});
			}.bind(this)
		});
	};

	render() {
		const {data} = this.props;
		const {queEsACM, queEsCapituloACM} = data;
		const {awards, activities, projects} = this.state;
		const SlideSettings = {
			count: 1,
			autoPlay: false,
			timeToSlide: 2500,
			showDots: true,
			pauseOnMouseOver: false,
			responsive: [
				{
					min_width: 900,
					count: 2
				},
				{
					min_width: 1200,
					count: 3
				},
				{
					min_width: 1500,
					count: 4
				}
			]
		}

		return (
			<ACMWebPage data={data} currentPage={0}>
				<header className="acm-maincover">
					<img src={acmChapterIconWhite} alt="ACM chapter logo" className="acm-maincover_logo"/>
					<h1 className="title">Capítulo Javeriano ACM</h1>
				</header>
				<section>
					<AboutSection icon={acmIcon} title="¿Qué es ACM?" text={queEsACM} />
					<AboutSection icon={acmChapterIconBlue} title="¿Qué es el capítulo?" text={queEsCapituloACM} />
				</section>
				{awards.length > 0 &&
					<section className="acm-full-section">
						<h1 className="sub_title acm-section_title">¿Qué hemos ganado?</h1>
						<Slider {...SlideSettings}>
							{awards.map((award, i) => {

								return <Award key={i} {...award}/>;
							})}
						</Slider>
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
