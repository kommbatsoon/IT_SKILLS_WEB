import React from 'react';
import {Router as BrowserRouter, Switch, Redirect} from 'react-router';

import {MainPage, ContactsPage, ErrorPage} from '@app/pages';
import {AppRoute} from '@app/components';

import {TrialLessonsRoute} from '@app/router/trialLessions.route';
import {CoursesRoute} from '@app/router/courses.route';

import {ROUTER_CONFIG} from '@util/config/router.config';
import history from '@app/history';

const BASE_URL = document.getElementsByTagName('base')[0].getAttribute('href');

const AppRouter = () => {
	return (
		<BrowserRouter basename={BASE_URL} history={history}>
			<Switch>
				<CoursesRoute path={ROUTER_CONFIG.COURSES.LIST} />
				<TrialLessonsRoute path={ROUTER_CONFIG.TRIAL_LESSON.LIST} />
				<AppRoute exact path={ROUTER_CONFIG.CONTACTS} component={ContactsPage} />
				<AppRoute exact path={ROUTER_CONFIG.MAIN} component={MainPage} />
				<AppRoute exact path={ROUTER_CONFIG.ERROR} component={ErrorPage} />
				<Redirect to={ROUTER_CONFIG.ERROR} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
