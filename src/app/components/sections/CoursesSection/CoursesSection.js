import React from 'react';

import {CardList} from '@app/components';
import {getClassName} from '@util/helpers';
import {APP_ICON} from '@util/constants';
import {TEXT_CONFIG} from '@util/config/text.config';
import {ROUTER_CONFIG} from '@util/config/router.config';

import history from '@app/history';

import style from './CoursesSection.scss';

const DEFAULT_CONFIG = {
	cards: [
		{
			iconName: APP_ICON.apple,
			title: 'iOS-разработка',
			description: 'Научим разработке мобильных приложение на Swift',
			path: ROUTER_CONFIG.COURSES.IOS,
		},
		{
			iconName: APP_ICON.android,
			title: 'Android-разработка',
			description: 'Научим разрабатывать приложения для Android',
			path: ROUTER_CONFIG.COURSES.ANDROID,
		},
		{
			iconName: APP_ICON.webDev,
			title: 'Web-разработка',
			description: 'Научим создавать сайты, используя HTML, CSS, JS, React и многое другое',
			path: ROUTER_CONFIG.COURSES.FRONTEND,
		},
		{
			iconName: APP_ICON.webDesign,
			title: 'WEB-ДИЗАЙН',
			description: 'Научим создавать современный стильный дизайн для любых сайтов',
			path: ROUTER_CONFIG.COURSES.WEB_DESIGN,
		},
	],
};

export const CoursesSection = ({config = DEFAULT_CONFIG, className}) => {
	const handleMoreDetailsClick = (card) => history.push(card.path);

	return (
		<section className={getClassName(style.wrapper, className)}>
			<CardList
				cards={config.cards}
				CardContainerProps={{
					withShadowOnHover: true,
					withHeadLine: true,
					ButtonProps: {text: TEXT_CONFIG.moreDetails, onClick: handleMoreDetailsClick},
				}}
				CardContentProps={{tittleClassName: style.cardTitle}}
			/>
		</section>
	);
};
