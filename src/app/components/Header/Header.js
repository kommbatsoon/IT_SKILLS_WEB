import React from 'react';
import {Link} from 'react-router-dom';

import {ROUTER_CONFIG} from '@util/config/router.config';

import style from './Header.scss';

export const Header = () => {
	return (
		<header className={style.header}>
			<Link to='/' className={style.logo}>
				IT-SKILLS.PRO
			</Link>

			<ul>
				<li>
					<Link to={ROUTER_CONFIG.MAIN}>Main</Link>
				</li>
				<li>
					<Link to={ROUTER_CONFIG.COURSES.LIST}>Courses</Link>
				</li>
				<li>
					<Link to={ROUTER_CONFIG.TRIAL_LESSON.LIST}>Trial lessons</Link>
				</li>
				<li>
					<Link to={ROUTER_CONFIG.CONTACTS}>Contacts</Link>
				</li>
			</ul>
		</header>
	);
};
