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
			members: []
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
