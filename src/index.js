import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeScene, StaffScene, MaratonsScene, ActivitiesScene, ActivityScene, ProjectsScene, ProjectScene, TutorialsScene, TutorialScene } from './scenes';
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

	activityScene = ({match}) => (
		<ActivityScene data={data} activityId={match.params.activityId}/>
	)

	projectsScene = () => (
		<ProjectsScene data={data}/>
	)

	projectScene = ({match}) => (
		<ProjectScene data={data} projectId={match.params.projectId}/>
	)

	tutorialsScene = () => (
		<TutorialsScene data={data}/>
	)

	tutorialScene = ({match}) => (
		<TutorialScene data={data} tutorialId={match.params.tutorialId}/>
	)

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Route exact path="/" component={this.homeScene}/>
					<Route exact path="/miembros" component={this.staffScene}/>
					<Route exact path="/maratones" component={this.maratonsScene}/>
					<Route exact path="/actividades" component={this.activitiesScene}/>
					<Route exact path="/actividad/:activityId" component={this.activityScene}/>
					<Route exact path="/proyectos" component={this.projectsScene}/>
					<Route exact path="/proyecto/:projectId" component={this.projectScene}/>
					<Route exact path="/tutoriales" component={this.tutorialsScene}/>
					<Route exact path="/tutorial/:tutorialId" component={this.tutorialScene}/>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
