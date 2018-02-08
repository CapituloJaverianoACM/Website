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
		console.log("d");
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
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
		const {email, message} = this.state;
		const form = [
			{
				type: "textarea",
				label: "Entrada",
				name: "message",
				value: this.state.message,
				isRequired: true
			},
			{
				type: "select",
				label: "Opciones",
				name: "opt",
				options: [
					{ value: "Juan" },
					{ value: "Johan" }
				],
				isRequired: true
			},
			{
				type: "email",
				name: "email",
				label: "Tu nombre",
				placeholder: "Nose",
				value: this.state.email,
				isRequired: true
			}
		];
		return (
			/*<form className="contact-form" onSubmit={this.handleInput}>
				<textarea name="message" rows="3" placeholder="Tu mensaje, comentario ó sugerencia" className="contact-form_message" value={message} onChange={this.handleMessage} required/>
				<section className="contact-form_section">
					<input type="email" placeholder="Correo" name="email" className="contact-form_email" value={email} onChange={this.handleInput} required/>
					<button className="btn btn_active contact-form_submit">Enviar</button>
				</section>
			</form>*/
			<Form data={form} handleInput={this.handleInput}/>
		);
	}
}

export default class Footer extends React.Component {
	render() {
		const { networks, developers, university, name, year } = this.props;
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
						<h6 className="footer_section_title">¿Preguntas o comentarios? ¡Contactanos!</h6>
						<ContactForm />
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
