import React from 'react';

import {CardList} from '@app/components';
import {getClassName} from '@util/helpers';
import {APP_ICON} from '@util/constants';
import {TEXT_CONFIG} from '@util/config/text.config';

import style from './CoursesSection.scss';

const DEFAULT_CONFIG = {
	sectionTitle: TEXT_CONFIG.sectionTitle.courses,
	cards: [
		{
			iconName: APP_ICON.apple,
			title: 'iOS-разработка',
			description: 'Научим разработке мобильных приложение на Swift',
		},
		{
			iconName: APP_ICON.webDev,
			title: 'Web-разработка',
			description: 'Научим создавать сайты, используя HTML, CSS, JS, React и многое другое',
		},
		{
			iconName: APP_ICON.android,
			title: 'Android-разработка',
			description: 'Научим разрабатывать приложения для Android',
		},
		{
			iconName: APP_ICON.webDesign,
			title: 'WEB-ДИЗАЙН',
			description: 'Научим создавать современный стильный дизайн для любых сайтов',
		},
	],
};

export const CoursesSection = ({config = DEFAULT_CONFIG, className}) => {
	return (
		<section className={getClassName(style.wrapper, className)}>
			<CardList
				cards={config.cards}
				CardContainerProps={{withShadowOnHover: true, withHeadLine: true}}
				CardContentProps={{tittleClassName: style.cardTitle}}
			/>
		</section>
	);
};
