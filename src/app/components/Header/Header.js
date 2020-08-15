import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {Icon, SocialIcons} from '@app/components';
import {getClassName, removeWhiteSpaces} from '@util/helpers';
import {ROUTER_CONFIG} from '@util/config/router.config';
import {GLOBAL_CONFIG} from '@util/config';
import {APP_ICON} from '@util/constants';

import style from './Header.scss';

export const Header = () => {
	const [isOpen, setOpen] = useState(false);

	const handleItemClick = () => {
		setTimeout(() => setOpen(false), 500);
	};

	return (
		<>
			<header className={getClassName(style.header, style.header_desktop)}>
				<Link to={ROUTER_CONFIG.MAIN} className={style.logoWrapper}>
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
			<header className={getClassName(style.header, style.header_mobile)}>
				<div className={style.mobileHeader} onClick={() => setOpen(!isOpen)}>
					<img src={require('@assets/images/logo-gold.svg')} alt='Logo' className={style.logo} />
					<Icon name={isOpen ? APP_ICON.burgerWhite : APP_ICON.burgerGold} />
				</div>

				<div className={getClassName(style.mobileContentWrapper, isOpen && style.mobileContentWrapper_open)}>
					<div className={getClassName(style.mobileContent, isOpen && style.mobileContent_open)}>
						<nav>
							<Link to={ROUTER_CONFIG.MAIN} onClick={handleItemClick}>
								{GLOBAL_CONFIG.navigation.main}
							</Link>
							<Link to={ROUTER_CONFIG.TRIAL_LESSON.LIST} onClick={handleItemClick}>
								{GLOBAL_CONFIG.navigation.trialLessons}
							</Link>
							<Link to={ROUTER_CONFIG.COURSES.LIST} onClick={handleItemClick}>
								{GLOBAL_CONFIG.navigation.courses}
							</Link>
							<Link to={ROUTER_CONFIG.CONTACTS} onClick={handleItemClick}>
								{GLOBAL_CONFIG.navigation.contacts}
							</Link>
						</nav>

						<a className={style.contact} href={`tel:${removeWhiteSpaces(GLOBAL_CONFIG.contacts.phone)}`}>
							{GLOBAL_CONFIG.contacts.phone}
						</a>
						<a className={style.contact} href={`mailto:${GLOBAL_CONFIG.contacts.email}`}>
							{GLOBAL_CONFIG.contacts.email}
						</a>

						<SocialIcons
							classes={{root: style.socialIcons, icon: style.icon}}
							icons={GLOBAL_CONFIG.contacts.socialMedia}
						/>
					</div>
				</div>
			</header>
		</>
	);
};
