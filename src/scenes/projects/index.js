import React from 'react';
import { ACMWebPage } from '../../components';

class Project extends React.Component {
	render() {
		const {id, title, picture, description} = this.props;
		return (
			<a className="acm-card" href={`/proyecto/${id}`}>
				<h6 className="acm-card_title">{title}</h6>
				<img className="acm-card_image" src={picture} alt="Project" />
				<p className="acm-card_description">{description}</p>
			</a>
		);
	}
}

export default class ProjectsScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			type: "all",
			projects: []
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

	render() {
		const { data } = this.props;
		const { projects, search, type } = this.state;
		return (
			<ACMWebPage data={data} currentPage={4}>
				<header className="acm-cover">
					<h1 className="title">Proyectos del capitulo</h1>
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
					<button className="btn btn_active">Buscar</button>
				</form>
				<section className="acm-grid">
					{projects.map((project, i) => {
						return <Project key={i} {...project} />
					})}
				</section>
			</ACMWebPage>
		);
	}
}
