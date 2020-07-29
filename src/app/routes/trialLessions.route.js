import React from 'react';
import {Redirect, Switch, Route} from 'react-router';

import {TrialLessonsPage, TrialLessonPage} from '@app/pages';

import {ROUTER_CONFIG} from '@util/config/router.config';
import {COURSE_ENUM} from '@util/constants';

export const TrialLessonsRoute = ({path}) => {
	return (
		<Switch>
			<Route
				exact
				path={`${path}/frontend`}
				component={(props) => <TrialLessonPage {...props} course={COURSE_ENUM.FRONTEND} />}
			/>
			<Route
				exact
				path={`${path}/ios`}
				component={(props) => <TrialLessonPage {...props} course={COURSE_ENUM.IOS} />}
			/>
			<Route exact path={path} component={TrialLessonsPage} />
			<Redirect to={ROUTER_CONFIG.ERROR} />
		</Switch>
	);
};
