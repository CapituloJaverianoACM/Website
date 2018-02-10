import $ from 'jquery';
import React from 'react';
import { NotificationManager } from 'react-notifications';
import { Form } from './..';
import icon from './javeriana_icon.png';

class Developer  extends React.Component {
	render() {
		const { url, name } = this.props;
		return (
			<p>
				<a href={url} target="_blank">
					<span className="acm acm-user footer_icon">{name}</span>
				</a>
			</p>
		);
	}
}

class Network extends React.Component {
	render() {
		const { link, icon, text } = this.props;
		return (
			<p>
				<a href={link} target="_blank">
					<span className={`acm ${icon} footer_icon`}>{text}</span>
				</a>
			</p>
		);
	}
}

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			message: ""
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
		const { host, contactUs } = this.props.data;
		$.ajax({
			type: 'POST',
			url: host + contactUs,
			data: this.state,
			success: function(response) {
				this.setState({
					email: "",
					message: ""
				});
				NotificationManager.success("Hemos recibido tu mensaje, revisa tu correo en unos minutos!", "Pregunta recibida", 5000);
			}.bind(this)
		});
	};

	render() {
		const { email, message } = this.state;
		const form = [
			{
				type: "email",
				name: "email",
				label: "Correo",
				placeholder: "tu-correo@javeriana.edu.co",
				value: email,
				required: true
			},
			{
				type: "textarea",
				name: "message",
				placeholder: "Tu mensaje, comentario ó sugerencia",
				value: message,
				required: true
			},
			{
				type: "button",
				value: "Enviar"
			}
		]
		return (
			<Form data={form} handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
		);
	}
}

export default class Footer extends React.Component {
	openContactForm = () => {
		$('#form_contact').fadeToggle();
	};

	render() {
		const { data } = this.props;
		const { networks, developers, university, name, year } = data;
		return (
			<footer className="footer">
				<section className="footer_content">
					<section className="footer_section footer_subcontent align-center">
						<img src={icon} className="footer_logo" alt="Javeriana logo"/>
						<section>
							<p>{university.name}</p>
							<p>{university.city}</p>
							<p>{university.direction}</p>
							<p>{university.phone}</p>
						</section>
					</section>
					<section className="footer_section">
						<h6 className="footer_section_title">Redes sociales</h6>
						{networks.map((network, i) => {
							return <Network key={i} {...network} />;
						})}
					</section>
					<section className="footer_section">
						<h6 className="footer_section_title">Desarrolladores encargados</h6>
						{developers.map((developer, i) => {
							return <Developer key={i} {...developer} />;
						})}
					</section>
					<section className="footer_section">
						<h6 className="footer_section_title">¿Preguntas o comentarios?</h6>
						<section className="footer-contact">
							<button className="btn btn_active" onClick={this.openContactForm}>¡Contactanos!</button>
							<section className="contact-form" id="form_contact">
								<ContactForm data={data}/>
							</section>
						</section>
					</section>
				</section>
				<section className="copyright_section">
					<div className="copyright">
						{`${name} | Copyright © ${year} - Todos los derechos reservados a sus respectivos dueños`}
					</div>
				</section>
			</footer>
		);
	}
}
