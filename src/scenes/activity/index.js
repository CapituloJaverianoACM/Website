import React from 'react';
import { ACMWebPage } from '../../components';

export default class ActivityScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Taller Django",
			date: "08 febrero del 2018",
			time: "6:00 pm - 8:00 pm",
			place: "Sala de bases de datos",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sodales ex ut blandit. Nulla interdum viverra erat, vel convallis nisi interdum ac.",
			image: "http://www.techspire.net/wp-content/uploads/2016/11/python-django-logo.jpg"
		};
	}

	render() {
		const { data } = this.props;
		const { title, date, time, place, description, image } = this.state;
		return (
			<ACMWebPage data={data} currentPage={3}>
				<section className="maincontent acm-page">
					<section className="acm-page-info">
						<header className="acm-activity-cover acm-page-header">
							<h1 className="sub_title">{title}</h1>
							<button className="acm acm-user-plus acm-join-button">Inscribirme</button>
						</header>
						<section className="acm-page-content">
							<span className="icon acm acm-calendar">{date}</span>
							<span className="icon acm acm-clock-o">{time}</span>
							<span className="icon acm acm-map-marker">{place}</span>
						</section>
					</section>
					<section className="acm-page-content">
						<section>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Massa enim nec dui nunc mattis. Suspendisse in est ante in. In fermentum posuere urna nec tincidunt praesent semper feugiat. Augue ut lectus arcu bibendum at varius. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Libero nunc consequat interdum varius sit amet mattis. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Volutpat consequat mauris nunc congue nisi vitae. Adipiscing diam donec adipiscing tristique risus. Mauris in aliquam sem fringilla ut. Morbi blandit cursus risus at ultrices mi tempus imperdiet. A condimentum vitae sapien pellentesque habitant morbi tristique.
							</p>

							<p>
								Cras tincidunt lobortis feugiat vivamus at augue. Viverra suspendisse potenti nullam ac. Nisi porta lorem mollis aliquam ut porttitor leo a. Consequat id porta nibh venenatis cras. Fringilla ut morbi tincidunt augue interdum. Non arcu risus quis varius quam. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Venenatis urna cursus eget nunc. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. At risus viverra adipiscing at in tellus integer. Massa tempor nec feugiat nisl pretium fusce.
							</p>

							<p>
								Lacus sed viverra tellus in hac habitasse platea. Ut sem nulla pharetra diam sit amet nisl. Vel eros donec ac odio tempor orci. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Nec feugiat nisl pretium fusce id velit. Egestas diam in arcu cursus euismod quis viverra. Justo eget magna fermentum iaculis. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Diam sit amet nisl suscipit adipiscing bibendum est. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque.
							</p>

							<p>
								Sit amet justo donec enim diam vulputate ut pharetra. Quam elementum pulvinar etiam non. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Egestas congue quisque egestas diam in arcu cursus euismod quis. Sed viverra tellus in hac habitasse platea dictumst. Neque laoreet suspendisse interdum consectetur libero id. A erat nam at lectus urna duis convallis convallis. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Dolor sit amet consectetur adipiscing elit ut aliquam. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sit amet purus gravida quis blandit turpis cursus in. A lacus vestibulum sed arcu non odio euismod lacinia at. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. At elementum eu facilisis sed odio. Augue lacus viverra vitae congue eu consequat ac felis donec. Rhoncus est pellentesque elit ullamcorper dignissim cras.
							</p>

							<p>
								Egestas erat imperdiet sed euismod. Fermentum dui faucibus in ornare quam viverra orci sagittis. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Odio eu feugiat pretium nibh ipsum consequat. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Quis imperdiet massa tincidunt nunc pulvinar sapien. Faucibus vitae aliquet nec ullamcorper sit amet. Est sit amet facilisis magna etiam. Ut tellus elementum sagittis vitae et leo duis. Ipsum dolor sit amet consectetur. Nec dui nunc mattis enim ut tellus elementum sagittis. Arcu cursus vitae congue mauris rhoncus aenean.
							</p>
						</section>
					</section>
				</section>
			</ACMWebPage>
		);
	}
}
