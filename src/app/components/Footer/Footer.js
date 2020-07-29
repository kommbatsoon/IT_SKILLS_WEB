import React from 'react';
import {Link} from 'react-router-dom';

import {Divider, SocialIcons} from '@app/components';

import {removeWhiteSpaces} from '@util/helpers';
import {ROUTER_CONFIG} from '@util/config/router.config';
import {TEXT_CONFIG} from '@util/config/text.config';
import {GLOBAL_CONFIG} from '@util/config';

import style from './Footer.scss';

export const Footer = ({config = GLOBAL_CONFIG.footer}) => {
	return (
		<>
			<Divider className={style.margin} />
			<footer className={style.footer}>
				<div>
					<Link to={ROUTER_CONFIG.MAIN}>
						<img src={require('@assets/images/logo-white.svg')} alt='Logo' className={style.logo} />
					</Link>
					<p className={style.copyright}>{TEXT_CONFIG.copyright}</p>
				</div>
				<div>
					<h3>{config.columnTitle.main}</h3>
					<nav>
						<Link to={ROUTER_CONFIG.MAIN}>{GLOBAL_CONFIG.navigation.main}</Link>
						<Link to={ROUTER_CONFIG.TRIAL_LESSON.LIST}>{GLOBAL_CONFIG.navigation.trialLessons}</Link>
						<Link to={ROUTER_CONFIG.COURSES.LIST}>{GLOBAL_CONFIG.navigation.courses}</Link>
						<Link to={ROUTER_CONFIG.COACHES}>{GLOBAL_CONFIG.navigation.coaches}</Link>
						<Link to={ROUTER_CONFIG.CONTACTS}>{GLOBAL_CONFIG.navigation.contacts}</Link>
					</nav>
				</div>
				<div>
					<h3>{config.columnTitle.courses}</h3>
					<nav>
						<Link to={ROUTER_CONFIG.COURSES.IOS}>{GLOBAL_CONFIG.course.ios}</Link>
						<Link to={ROUTER_CONFIG.COURSES.FRONTEND}>{GLOBAL_CONFIG.course.frontend}</Link>
						<Link to={ROUTER_CONFIG.COURSES.WEB_DESIGN}>{GLOBAL_CONFIG.course.webDesign}</Link>
						<Link to={ROUTER_CONFIG.COURSES.ANDROID}>{GLOBAL_CONFIG.course.android}</Link>
					</nav>
				</div>
				<div>
					<h3>{config.columnTitle.support}</h3>
					<a className={style.phone} href={`tel:${removeWhiteSpaces(GLOBAL_CONFIG.contacts.phone)}`}>
						{GLOBAL_CONFIG.contacts.phone}
					</a>
					<a className={style.email} href={`mailto:${GLOBAL_CONFIG.contacts.email}`}>
						{GLOBAL_CONFIG.contacts.email}
					</a>
					<SocialIcons classes={{root: style.socialIcons, icon: style.icon}} />
				</div>
			</footer>
		</>
	);
};
