import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeScene, StaffScene } from './scenes';
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

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Route exact path="/" component={this.homeScene}/>
					<Route exact path="/staff" component={this.staffScene}/>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
