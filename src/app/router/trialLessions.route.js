import React from 'react';
import {Redirect, Switch} from 'react-router';

import {TrialLessonsPage, FrontendLessonPage, IOSLessonPage} from '@app/pages';
import {AppRoute} from '@app/components';

import {ROUTER_CONFIG} from '@util/config/router.config';

export const TrialLessonsRoute = ({path, ...rest}) => {
	return (
		<Switch>
			<AppRoute exact path={`${path}/frontend`} component={FrontendLessonPage} {...rest} />
			<AppRoute exact path={`${path}/ios`} component={IOSLessonPage} {...rest} />
			<AppRoute exact path={path} component={TrialLessonsPage} {...rest} />
			<Redirect to={ROUTER_CONFIG.ERROR} />
		</Switch>
	);
};
