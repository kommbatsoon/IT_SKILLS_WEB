import React from 'react';
import {Router as BrowserRouter, Route, Switch} from 'react-router';

import {MainPage, ContactsPage, CoursesPage, TrialLessonsPage} from '@app/pages';
import {Header} from '@app/components';

import {ROUTER_CONFIG} from '@util/config/router.config';
import history from '@app/history';

const BASE_URL = document.getElementsByTagName('base')[0].getAttribute('href');

export default class AppRouter extends React.Component {
	render() {
		return (
			<BrowserRouter basename={BASE_URL} history={history}>
				<Switch>
					<AppRoute exact path={ROUTER_CONFIG.TRIAL_LESSON.LIST} component={TrialLessonsPage} />
					<AppRoute exact path={ROUTER_CONFIG.COURSES.LIST} component={CoursesPage} />
					<AppRoute exact path={ROUTER_CONFIG.CONTACTS} component={ContactsPage} />
					<AppRoute exact path={ROUTER_CONFIG.MAIN} component={MainPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

const AppRoute = ({component, ...rest}) => {
	const renderAppContainer = (Component) => (props) => {
		return (
			<div className='app-container'>
				<Header />
				<Component {...props} />
			</div>
		);
	};

	return <Route {...rest} render={renderAppContainer(component)} />;
};
