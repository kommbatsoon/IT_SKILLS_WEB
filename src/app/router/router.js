import React from 'react';
import {Router as BrowserRouter, Switch} from 'react-router';

import {MainPage, ContactsPage, TrialLessonsPage} from '@app/pages';
import {AppRoute} from '@app/components';

import {CoursesRoute} from '@app/router/courses.route';

import {ROUTER_CONFIG} from '@util/config/router.config';
import history from '@app/history';

const BASE_URL = document.getElementsByTagName('base')[0].getAttribute('href');

export default class AppRouter extends React.Component {
	render() {
		return (
			<BrowserRouter basename={BASE_URL} history={history}>
				<Switch>
					<AppRoute exact path={ROUTER_CONFIG.TRIAL_LESSON.LIST} component={TrialLessonsPage} />
					<CoursesRoute path={ROUTER_CONFIG.COURSES.LIST} />
					<AppRoute exact path={ROUTER_CONFIG.CONTACTS} component={ContactsPage} />
					<AppRoute exact path={ROUTER_CONFIG.MAIN} component={MainPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}
