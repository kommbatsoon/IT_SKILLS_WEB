import React from 'react';
import {Link} from 'react-router-dom';

import {Icon} from '@app/components';

import {ROUTER_CONFIG} from '@util/config/router.config';
import {TEXT_CONFIG} from '@util/config/text.config';

import style from './Header.scss';

export const Header = () => {
	return (
		<header className={style.header}>
			<Link to={ROUTER_CONFIG.MAIN}>
				<img src={require('@assets/images/logo-gold.svg')} alt='Logo' className={style.logo} />
			</Link>

			<nav>
				<Link to={ROUTER_CONFIG.TRIAL_LESSON.LIST}>{TEXT_CONFIG.navigation.trialLessons}</Link>
				<Link to={ROUTER_CONFIG.COURSES.LIST}>{TEXT_CONFIG.navigation.courses}</Link>
				<Link to={ROUTER_CONFIG.COACHES}>{TEXT_CONFIG.navigation.contacts}</Link>
				<Link to={ROUTER_CONFIG.CONTACTS}>{TEXT_CONFIG.navigation.contacts}</Link>
			</nav>

			<div className={style.socialIcons}>
				<Icon name='vk-gold' className={style.icon} />
				<Icon name='fb-white' className={style.icon} />
				<Icon name='inst-white' className={style.icon} />
			</div>
		</header>
	);
};
