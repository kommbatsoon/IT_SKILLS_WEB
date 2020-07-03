import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTER_CONFIG} from '@util/config/router.config';

import style from './CoursesPage.scss';

export const CoursesPage = () => {
	return (
		<div className='page-wrapper'>
			<h1>Courses Page</h1>
			<ul className={style.nav}>
				<li>
					<Link to={ROUTER_CONFIG.COURSES.FRONTEND}>Frontend</Link>
				</li>
				<li className='item'>
					<Link to={ROUTER_CONFIG.COURSES.IOS}>IOS</Link>
				</li>
			</ul>
		</div>
	);
};
