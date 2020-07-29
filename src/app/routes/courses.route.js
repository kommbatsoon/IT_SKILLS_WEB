import React from 'react';
import {Redirect, Switch, Route} from 'react-router';

import {CoursesPage, CoursePage} from '@app/pages';

import {ROUTER_CONFIG} from '@util/config/router.config';
import {COURSE_ENUM} from '@util/constants';

export const CoursesRoute = ({path}) => {
	return (
		<Switch>
			<Route
				exact
				path={`${path}/frontend`}
				component={(props) => <CoursePage {...props} course={COURSE_ENUM.FRONTEND} />}
			/>
			<Route
				exact
				path={`${path}/ios`}
				component={(props) => <CoursePage {...props} course={COURSE_ENUM.IOS} />}
			/>
			<Route exact path={path} component={CoursesPage} />
			<Redirect to={ROUTER_CONFIG.ERROR} />
		</Switch>
	);
};
