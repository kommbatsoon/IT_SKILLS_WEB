import React from 'react';
import {Switch} from 'react-router';

import {AppRoute} from '@app/components';
import {CoursesPage, FrontendCoursePage, IOSCoursePage} from '@app/pages';

export const CoursesRoute = ({path, ...rest}) => {
	return (
		<Switch>
			<AppRoute exact path={`${path}/frontend`} component={FrontendCoursePage} {...rest} />
			<AppRoute exact path={`${path}/ios`} component={IOSCoursePage} {...rest} />
			<AppRoute exact path={path} component={CoursesPage} {...rest} />
		</Switch>
	);
};
