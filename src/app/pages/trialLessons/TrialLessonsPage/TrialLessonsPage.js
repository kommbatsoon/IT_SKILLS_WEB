import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTER_CONFIG} from '@util/config/router.config';

import style from './TrialLessonsPage.scss';

export const TrialLessonsPage = () => {
	return (
		<div className='page-wrapper'>
			<h1>Trial Lessons Page</h1>
			<ul className={style.nav}>
				<li>
					<Link to={ROUTER_CONFIG.TRIAL_LESSON.FRONTEND}>Frontend</Link>
				</li>
				<li className='item'>
					<Link to={ROUTER_CONFIG.TRIAL_LESSON.IOS}>IOS</Link>
				</li>
			</ul>
		</div>
	);
};
