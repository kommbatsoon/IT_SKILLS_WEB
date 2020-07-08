import React from 'react';
import {Redirect, Switch, Route} from 'react-router';

import {TrialLessonsPage, FrontendLessonPage, IOSLessonPage} from '@app/pages';

import {ROUTER_CONFIG} from '@util/config/router.config';

export const TrialLessonsRoute = ({path}) => {
	return (
		<Switch>
			<Route exact path={`${path}/frontend`} component={FrontendLessonPage} />
			<Route exact path={`${path}/ios`} component={IOSLessonPage} />
			<Route exact path={path} component={TrialLessonsPage} />
			<Redirect to={ROUTER_CONFIG.ERROR} />
		</Switch>
	);
};