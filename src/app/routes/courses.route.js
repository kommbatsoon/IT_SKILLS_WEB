import React from 'react';
import {Redirect, Switch, Route} from 'react-router';

import {CoursesPage, FrontendCoursePage, IOSCoursePage} from '@app/pages';

import {ROUTER_CONFIG} from '@util/config/router.config';

export const CoursesRoute = ({path}) => {
	return (
		<Switch>
			<Route exact path={`${path}/frontend`} component={FrontendCoursePage} />
			<Route exact path={`${path}/ios`} component={IOSCoursePage} />
			<Route exact path={path} component={CoursesPage} />
			<Redirect to={ROUTER_CONFIG.ERROR} />
		</Switch>
	);
};
