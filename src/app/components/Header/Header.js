import React from 'react';
import {Link} from 'react-router-dom';

import {SocialIcons} from '@app/components';
import {ROUTER_CONFIG} from '@util/config/router.config';
import {GLOBAL_CONFIG} from '@util/config';

import style from './Header.scss';

export const Header = () => {
	return (
		<header className={style.header}>
			<Link to={ROUTER_CONFIG.MAIN}>
				<img src={require('@assets/images/logo-gold.svg')} alt='Logo' className={style.logo} />
			</Link>

			<nav>
				<Link to={ROUTER_CONFIG.TRIAL_LESSON.LIST}>{GLOBAL_CONFIG.navigation.trialLessons}</Link>
				<Link to={ROUTER_CONFIG.COURSES.LIST}>{GLOBAL_CONFIG.navigation.courses}</Link>
				<Link to={ROUTER_CONFIG.CONTACTS}>{GLOBAL_CONFIG.navigation.contacts}</Link>
			</nav>

			<SocialIcons
				classes={{root: style.socialIcons, icon: style.icon}}
				icons={GLOBAL_CONFIG.contacts.socialMedia}
			/>
		</header>
	);
};
