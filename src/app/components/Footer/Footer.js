import React from 'react';
import {Link} from 'react-router-dom';

import {Divider, Icon} from '@app/components';

import {ROUTER_CONFIG} from '@util/config/router.config';
import {TEXT_CONFIG} from '@util/config/text.config';
import {APP_ICON} from '@util/constants';

import style from './Footer.scss';

const DEFAULT_CONFIG = {
	contacts: {
		phone: '+375292640518',
		phoneToDisplay: '+375 29 264 05 18',
		email: 'info@it-skills.pro',
	},
};

export const Footer = ({config = DEFAULT_CONFIG}) => {
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
					<h3>{TEXT_CONFIG.footerColumnTitle.main}</h3>
					<nav>
						<Link to={ROUTER_CONFIG.MAIN}>{TEXT_CONFIG.navigation.main}</Link>
						<Link to={ROUTER_CONFIG.TRIAL_LESSON.LIST}>{TEXT_CONFIG.navigation.trialLessons}</Link>
						<Link to={ROUTER_CONFIG.COURSES.LIST}>{TEXT_CONFIG.navigation.courses}</Link>
						<Link to={ROUTER_CONFIG.COACHES}>{TEXT_CONFIG.navigation.coaches}</Link>
						<Link to={ROUTER_CONFIG.CONTACTS}>{TEXT_CONFIG.navigation.contacts}</Link>
					</nav>
				</div>
				<div>
					<h3>{TEXT_CONFIG.footerColumnTitle.courses}</h3>
					<nav>
						<Link to={ROUTER_CONFIG.COURSES.IOS}>{TEXT_CONFIG.courses.ios}</Link>
						<Link to={ROUTER_CONFIG.COURSES.FRONTEND}>{TEXT_CONFIG.courses.frontend}</Link>
						<Link to={ROUTER_CONFIG.COURSES.WEB_DESIGN}>{TEXT_CONFIG.courses.webDesign}</Link>
						<Link to={ROUTER_CONFIG.COURSES.ANDROID}>{TEXT_CONFIG.courses.android}</Link>
					</nav>
				</div>
				<div>
					<h3>{TEXT_CONFIG.footerColumnTitle.support}</h3>
					<a className={style.phone} href={`tel:${config.contacts.phone}`}>
						{config.contacts.phoneToDisplay}
					</a>
					<a className={style.email} href={`mailto:${config.contacts.email}`}>
						{config.contacts.email}
					</a>
					<div className={style.socialIcons}>
						<Icon name={APP_ICON.vkWhite} className={style.icon} />
						<Icon name={APP_ICON.fbWhite} className={style.icon} />
						<Icon name={APP_ICON.instWhite} className={style.icon} />
					</div>
				</div>
			</footer>
		</>
	);
};
