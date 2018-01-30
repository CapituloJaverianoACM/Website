import React from 'react';
import { Link } from 'react-router-dom';
import { ACMWebPage } from '../../components';

class Tutorial extends React.Component {
	render() {
		const {id, title, picture, description} = this.props;
		return (
			<Link className="acm-card" to={`/actividad/${id}`}>
				<h6 className="acm-card_title">{title}</h6>
				<img className="acm-card_image" src={picture} alt="Tutorial" />
				<p className="acm-card_description">{description}</p>
			</Link>
		);
	}
}

export default class TutorialsScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			tutorials: []
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
		const { tutorials, search } = this.state;
		return (
			<ACMWebPage data={data} currentPage={5}>
				<header className="acm-cover">
					<h1 className="title">Tutoriales y guias de ayuda</h1>
				</header>
				<form className="acm-inlineform" onSubmit={this.handleSubmit}>
					<input type="text" name="search" value={search} onChange={this.handleInput} />
					<button className="btn btn_active">Buscar</button>
				</form>
				<section className="acm-grid">
					{tutorials.map((tutorial, i) => {
						return <Tutorial key={i} {...tutorial} />
					})}
				</section>
			</ACMWebPage>
		);
	}
}
