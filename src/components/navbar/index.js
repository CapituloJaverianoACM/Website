import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon_blue.svg';

class NavbarItem extends React.Component {
	render() {
		const {active, url, text} = this.props;
		return (
			<li className={`acm-navbar_menuitem ${active ? "acm-navbar__current" : ""}`}>
				<Link to={url} className="acm-navbar_link">{text}</Link>
			</li>
		);
	}
}

class NavbarModalTrigger extends React.Component {
	render() {
		const {text, toggleJoinModal} = this.props;
		return (
			<li className="acm-navbar_menuitem">
				<div className="acm-navbar_link" onClick={toggleJoinModal}>{text}</div>
			</li>
		);
	}
}

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [
				{
					url: "/",
					text: "Inicio"
				},
				{
					url: "/miembros",
					text: "Miembros"
				},
				{
					url: "/maratones",
					text: "Maratones"
				},
				{
					url: "/actividades",
					text: "Actividades"
				},
				{
					url: "/proyectos",
					text: "Proyectos"
				},
				{
					url: "/tutoriales",
					text: "Tutoriales"
				}
			]
		};
	}

	handleNavbar = () => {
		$('#acm-navbar').slideToggle();
	};

	render() {
		const { links } = this.state;
		const { currentPage, toggleJoinModal } = this.props;
		return (
			<nav className="acm-navbar">
				<img src={icon} alt="ACM logo" className="acm-navbar_logo"/>
				<ul className="acm-navbar_menu" id="acm-navbar">
					{links.map((link, i) => {
						return <NavbarItem key={i} active={currentPage === i} {...link} />
					})}
					<NavbarModalTrigger text="¡Unete!" toggleJoinModal={toggleJoinModal}/>
				</ul>
				<span className="acm-navbar_trigger acm acm-bars" id="navbarTrigger" onClick={this.handleNavbar} />
			</nav>
		);
	}
}
