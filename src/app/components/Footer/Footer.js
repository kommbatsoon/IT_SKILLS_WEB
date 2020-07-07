import React from 'react';
import {Link} from 'react-router-dom';

import {Divider, Icon} from '@app/components';

import {ROUTER_CONFIG} from '@util/config/router.config';
import {TEXT_CONFIG} from '@util/config/text.config';

import style from './Footer.scss';

export const Footer = () => {
	return (
		<>
			<Divider />
			<footer className={style.footer}>
				<div>
					<Link to={ROUTER_CONFIG.MAIN}>
						<img src={require('@assets/images/logo-white.svg')} alt='Logo' className={style.logo} />
					</Link>
				</div>
				<div>
					<h3>Основное</h3>
					<nav>
						<Link to={ROUTER_CONFIG.MAIN}>{TEXT_CONFIG.navigation.main}</Link>
						<Link to={ROUTER_CONFIG.TRIAL_LESSON.LIST}>{TEXT_CONFIG.navigation.trialLessons}</Link>
						<Link to={ROUTER_CONFIG.COURSES.LIST}>{TEXT_CONFIG.navigation.courses}</Link>
						<Link to={ROUTER_CONFIG.COACHES}>{TEXT_CONFIG.navigation.coaches}</Link>
						<Link to={ROUTER_CONFIG.CONTACTS}>{TEXT_CONFIG.navigation.contacts}</Link>
					</nav>
				</div>
				<div>
					<h3>Курсы</h3>
					<nav>
						<Link to={ROUTER_CONFIG.COURSES.IOS}>{TEXT_CONFIG.courses.ios}</Link>
						<Link to={ROUTER_CONFIG.COURSES.FRONTEND}>{TEXT_CONFIG.courses.frontend}</Link>
						<Link to={ROUTER_CONFIG.COURSES.WEB_DESIGN}>{TEXT_CONFIG.courses.webDesign}</Link>
						<Link to={ROUTER_CONFIG.COURSES.ANDROID}>{TEXT_CONFIG.courses.android}</Link>
					</nav>
				</div>
				<div>
					<h3>Поддержка</h3>
					<a className={style.phone} href='tel:+375292640518'>
						+375 29 264 05 18
					</a>
					<a className={style.email} href='mailto:info@it-skills.pro'>
						info@it-skills.pro
					</a>
					<div className={style.socialIcons}>
						<Icon name='vk-gold' className={style.icon} />
						<Icon name='fb-white' className={style.icon} />
						<Icon name='inst-white' className={style.icon} />
					</div>
				</div>
			</footer>
		</>
	);
};
