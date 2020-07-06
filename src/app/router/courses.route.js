import React from 'react';
import {Redirect, Switch} from 'react-router';

import {CoursesPage, FrontendCoursePage, IOSCoursePage} from '@app/pages';
import {AppRoute} from '@app/components';

import {ROUTER_CONFIG} from '@util/config/router.config';

export const CoursesRoute = ({path, ...rest}) => {
	return (
		<Switch>
			<AppRoute exact path={`${path}/frontend`} component={FrontendCoursePage} {...rest} />
			<AppRoute exact path={`${path}/ios`} component={IOSCoursePage} {...rest} />
			<AppRoute exact path={path} component={CoursesPage} {...rest} />
			<Redirect to={ROUTER_CONFIG.ERROR} />
		</Switch>
	);
};
