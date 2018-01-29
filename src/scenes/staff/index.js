import React from 'react';
import { ACMWebPage } from '../../components';

class Member extends React.Component {
	render() {
		const {picture, names, surnames, rol, description, checked} = this.props;
		return (
			<section className="acm-staff_member">
				<input className="acm-staff_check" type="radio" name="member" defaultChecked={checked}/>
				<article className="acm-staff_imagesection">
					<img className="acm-staff_image" src={picture} alt="Member" />
					<h6 className="acm-staff_name">{names} {surnames}</h6>
				</article>
				<article className="acm-staff_infosection">
					<h5 className="acm-staff_rol">{rol}</h5>
					<p className="acm-staff_description">{description}</p>
				</article>
			</section>
		);
	}
}

export default class StaffScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			members: [
				{
					picture: "https://cdn4.iconfinder.com/data/icons/smileys-3/24/smiley-smile--512.png",
					names: "Juan Manuel",
					surnames: "Sánchez Lozano",
					rol: "Presidente",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sodales ex ut blandit. Nulla interdum viverra erat, vel convallis nisi interdum ac. Donec eros justo, laoreet ac leo ac, molestie eleifend turpis. Pellentesque sagittis mi rhoncus, laoreet erat quis, condimentum leo. Nullam non eros finibus, luctus nibh in, lobortis."
				},
				{
					picture: "https://cdn4.iconfinder.com/data/icons/smileys-3/24/smiley-smile--512.png",
					names: "Juan Pablo",
					surnames: "Rodriguez Navarro",
					rol: "Presidente",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sodales ex ut blandit. Nulla interdum viverra erat, vel convallis nisi interdum ac. Donec eros justo, laoreet ac leo ac, molestie eleifend turpis. Pellentesque sagittis mi rhoncus, laoreet erat quis, condimentum leo. Nullam non eros finibus, luctus nibh in, lobortis."
				},
				{
					picture: "https://cdn4.iconfinder.com/data/icons/smileys-3/24/smiley-smile--512.png",
					names: "Juan Manuel",
					surnames: "Sánchez Lozano",
					rol: "Presidente",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sodales ex ut blandit. Nulla interdum viverra erat, vel convallis nisi interdum ac. Donec eros justo, laoreet ac leo ac, molestie eleifend turpis. Pellentesque sagittis mi rhoncus, laoreet erat quis, condimentum leo. Nullam non eros finibus, luctus nibh in, lobortis."
				}
			]
		};
	}

	render() {
		const { data } = this.props;
		const { members } = this.state;
		return (
			<ACMWebPage data={data} currentPage={1}>
				<header className="acm-cover">
					<h1 className="title">Staff del capitulo</h1>
				</header>
				<section className="acm-staff">
					{members.map((member, i) => {
						return <Member key={i} {...member} checked={i === 0}/>
					})}
				</section>
			</ACMWebPage>
		);
	}
}
