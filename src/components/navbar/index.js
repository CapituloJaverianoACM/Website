import React from 'react';
import icon from './icon_blue.svg';

class NavbarItem extends React.Component {
	render() {
		const {active, url, text} = this.props;
		return (
			<li className={`acm-navbar_menuitem ${active ? "acm-navbar__current" : ""}`}>
				<a href={url} className="acm-navbar_link">{text}</a>
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
					url: "/staff",
					text: "Staff"
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

	render() {
		const { links } = this.state;
		const { currentPage, toggleJoinModal } = this.props;
		return (
			<nav className="acm-navbar">
				<img src={icon} alt="ACM logo" className="acm-navbar_logo"/>
				<ul className="acm-navbar_menu" id="acm-navbar">
					{links.map((link, i) => {
						const {url, text} = link;
						return <NavbarItem key={i} active={currentPage === i} url={url} text={text} />
					})}
					<NavbarModalTrigger text="¡Unete!" toggleJoinModal={toggleJoinModal}/>
				</ul>
				<span className="acm-navbar_trigger acm acm-bars" id="navbarTrigger" target="#acm-navbar" />
			</nav>
		);
	}
}
