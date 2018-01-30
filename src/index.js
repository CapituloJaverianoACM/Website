import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeScene, StaffScene, MaratonsScene, ActivitiesScene, ProjectsScene, TutorialsScene } from './scenes';
import './static/css/styles.css';
import 'react-notifications/lib/notifications.css';
import data from './data.json';

class App extends React.Component {

	homeScene = () => (
		<HomeScene data={data}/>
	)

	staffScene = () => (
		<StaffScene data={data}/>
	)

	maratonsScene = () => (
		<MaratonsScene data={data}/>
	)

	activitiesScene = () => (
		<ActivitiesScene data={data}/>
	)

	projectsScene = () => (
		<ProjectsScene data={data}/>
	)

	tutorialsScene = () => (
		<TutorialsScene data={data}/>
	)

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Route exact path="/" component={this.homeScene}/>
					<Route exact path="/staff" component={this.staffScene}/>
					<Route exact path="/maratones" component={this.maratonsScene}/>
					<Route exact path="/actividades" component={this.activitiesScene}/>
					<Route exact path="/proyectos" component={this.projectsScene}/>
					<Route exact path="/tutoriales" component={this.tutorialsScene}/>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
