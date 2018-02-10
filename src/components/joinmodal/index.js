import $ from 'jquery';
import React from 'react';
import { NotificationManager } from 'react-notifications';
import { Form } from './..';

export default class JoinModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			names: "",
			surnames: "",
			email: "",
			major: "",
			reason: ""
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
	}

	render() {
		const {toggleJoinModal} = this.props;
		const { names, surnames, email, major, reason } = this.state;
		const form = [
			{
				type: "text",
				name: "names",
				label: "Nombres",
				placeholder: "Juan Manuel",
				value: names,
				required: true,
			},
			{
				type: "text",
				name: "surnames",
				label: "Apellidos",
				placeholder: "Sánchez Lozano",
				value: surnames,
				required: true,
			},
			{
				type: "text",
				name: "names",
				label: "Correo",
				placeholder: "tu-correo@javeriana.edu.co",
				value: email,
				required: true,
				pattern: "[A-Za-z0-9_\\-.]*@javeriana.edu.co"
			},
			{
				type: "select",
				name: "major",
				label: "Carrera",
				placeholder: "Ingeniería",
				value: major,
				required: true,
				options: [
					{
						value: "",
						text: ""
					},
					{
						value: "IS",
						text: "Ingeniería de Sistemas"
					},
					{
						value: "IE",
						text: "Ingeniería Electronica"
					},
					{
						value: "II",
						text: "Ingeniería Industrial"
					},
					{
						value: "IC",
						text: "Ingeniería Civil"
					},
					{
						value: "MT",
						text: "Matemáticas"
					},
					{
						value: "OT",
						text: "Otro"
					}
				]
			},
			{
				type: "textarea",
				name: "reason",
				placeholder: "¿ Cómo te enteraste de ACM ?",
				value: reason,
				required: true
			},
			{
				type: "button",
				value: "Enviar"
			}
		];

		return (
			<section className="acm-modal_frame">
				<section className="acm-modal full-modal">
					<span className="acm acm-times acm-modal_close" onClick={toggleJoinModal}/>
					<section className="acm-modal_content">
						<h2 className="sub_title acm-form_title center">¿Quieres hacer parte del capítulo?</h2>
						<section className="acm-join_modal">
							<Form data={form} handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
						</section>
					</section>
				</section>
			</section>
		);
	}
}
