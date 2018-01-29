import $ from 'jquery';
import React from 'react';
import { NotificationManager } from 'react-notifications';

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

	handleNames = (e) => {
		this.setState({ names: e.target.value });
	};

	handleSurnames = (e) => {
		this.setState({ surnames: e.target.value });
	};

	handleEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	handleMajor = (e) => {
		this.setState({ major: e.target.value });
	};

	handleReason = (e) => {
		this.setState({ reason: e.target.value });
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

		return (
			<section className="acm-modal_frame">
				<section className="acm-modal full-modal">
					<span className="acm acm-times acm-modal_close" onClick={toggleJoinModal}/>
					<section className="acm-modal_content">
						<form className="acm-form" onSubmit={this.handleSubmit}>
							<h2 className="sub_title acm-form_title">¿Quieres participar en maratones?</h2>
							<article className="acm-form_item">
								<input type="text" name="names" id="join-names" onChange={this.handleNames} required />
								<label htmlFor="join-names">Nombres</label>
							</article>
							<article className="acm-form_item">
								<input type="text" name="surnames" id="join-surnames" onChange={this.handleSurnames} required />
								<label htmlFor="join-surnames">Apellidos</label>
							</article>
							<article className="acm-form_item">
								<input type="email" name="email" id="join-email" pattern="[A-Za-z0-9_\-.]*@javeriana.edu.co" onChange={this.handleEmail} required />
								<label htmlFor="join-email">Correo</label>
							</article>
							<article className="acm-form_item">
								<select name="major" id="join-major" onChange={this.handleMajor} required >
									<option></option>
									<option value="IS">Ingeniería de Sistemas</option>
									<option value="IE">Ingeniería Electronica</option>
									<option value="II">Ingeniería Industrial</option>
									<option value="IC">Ingeniería Civil</option>
									<option value="MT">Matemáticas</option>
									<option value="OT">Otro</option>
								</select>
								<label htmlFor="join-major">Tu carrera</label>
							</article>
							<article className="acm-form_item">
								<textarea rows="5" name="reason" id="join-reason" onChange={this.handleReason} required />
								<label htmlFor="join-reason">¿ Cómo te enteraste de ACM ?</label>
							</article>
							<button className="btn btn_active">Enviar</button>
						</form>
					</section>
				</section>
			</section>
		);
	}
}
