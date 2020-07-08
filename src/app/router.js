import React from 'react';
import {Switch, Redirect, Route} from 'react-router';

import {CoursesRoute, TrialLessonsRoute} from '@app/routes';
import {MainPage, ContactsPage, ErrorPage} from '@app/pages';

import {ROUTER_CONFIG} from '@util/config/router.config';

const AppRouter = () => {
	return (
		<Switch>
			<CoursesRoute path={ROUTER_CONFIG.COURSES.LIST} />
			<TrialLessonsRoute path={ROUTER_CONFIG.TRIAL_LESSON.LIST} />
			<Route exact path={ROUTER_CONFIG.CONTACTS} component={ContactsPage} />
			<Route exact path={ROUTER_CONFIG.MAIN} component={MainPage} />
			<Route exact path={ROUTER_CONFIG.ERROR} component={ErrorPage} />
			<Redirect to={ROUTER_CONFIG.ERROR} />
		</Switch>
	);
};

export default AppRouter;
