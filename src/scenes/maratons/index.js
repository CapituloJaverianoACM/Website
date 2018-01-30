import $ from 'jquery';
import React from 'react';
import { NotificationManager } from 'react-notifications';
import { ACMWebPage } from '../../components';

class Team extends React.Component {
	render() {
		const {picture, name, members} = this.props;
		return (
			<article className="acm-teams_team item">
				<section className="acm-teams_teampicture">
					<img src={picture} alt="Equipo"/>
				</section>
				<h4 className="acm-teams_teamtitle">{name}</h4>
				{members.map((member, i) => {
					return <p className="acm-teams_teammember" key={i}>member</p>
				})}
			</article>
		);
	}
}

class Train extends React.Component {
	render() {
		const {title, day, time, place} = this.props;
		return (
			<article className="acm-trains_train">
				<h4 className="acm-trains_traintitle">{title}</h4>
				<section className="acm-trains_trainfinfo">
					<p>{day}</p>
					<p>{time}</p>
					<p>{place}</p>
				</section>
				<button className="btn btn_active acm-modal_trigger">Ver temas</button>
			</article>
		);
	}
}

export default class MaratonsScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: [
				{
					picture: "https://www.dsaa.org/get/files/image/galleries/memberIcon-0001.png",
					name: "Equipo 1",
					members: [
						"Miembro 1",
						"Miembro 2",
						"Miembro 3"
					]
				}
			]
		};
	}

	getTeams = () => {
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
		const { data } = this.props;
		const { teams } = this.state;
		const { trainings } = data;
		return (
			<ACMWebPage data={data} currentPage={2}>
				<header className="acm-cover">
					<h1 className="title">Maratones de programación</h1>
				</header>
				<section className="acm-section acm-about">
					<article className="acm-about_article">
						<h5 className="sub_title acm-about_title">¿Qué son los entrenos de programación?</h5>
						<p className="acm-about_text">{data.queEsEntrenamientos}</p>
					</article>
					<article className="acm-about_article">
						<h5 className="sub_title acm-about_title">¿Qué son las maratones de programación?</h5>
						<p className="acm-about_text">{data.queEsMaratones}</p>
					</article>
				</section>
				<section className="acm-section">
					<h1 className="sub_title acm-section_title">Nuestros entrenos</h1>
					<section className="acm-trains">
						{trainings.map((train, i) => {
							return <Train key={i} {...train}/>
						})}
					</section>
				</section>
				<section className="acm-section">
					<h1 className="sub_title acm-section_title">Equipos maratonistas</h1>
					<section className="acm-teams">
						{teams.map((team, i) => {
							return <Team key={i} {...team}/>
						})}
					</section>
				</section>
			</ACMWebPage>
		);
	}
}
