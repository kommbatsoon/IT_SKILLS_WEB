import React from 'react';

import {CardList} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {ROUTER_CONFIG} from '@util/config/router.config';

import history from '@app/history';

import style from './CoachesSection.scss';

const DEFAULT_CONFIG = {
	sectionTitle: TEXT_CONFIG.sectionTitle.coaches,
	cards: [
		{
			title: 'Денис Байдан',
			subtitle: 'SENIOR IOS-DEVELOPER',
			description: 'Автор и преподаватель курса. 7 лет опыта в программировании, 5 лет в iOS-разработке',
			path: ROUTER_CONFIG.COURSES.IOS,
		},
		{
			title: 'Павел Унгур',
			subtitle: 'SENIOR FRONTEND-DEVELOPER',
			description: 'Преподаватель курсе WEB-разработка. 4 года опыта в разработке',
			path: ROUTER_CONFIG.COURSES.FRONTEND,
		},
	],
};

export const CoachesSection = ({config = DEFAULT_CONFIG, className}) => {
	const handleMoreDetailsClick = (card) => history.push(card.path);

	return (
		<section className={getClassName(style.wrapper, className)}>
			<h2>{config.sectionTitle}</h2>

			<CardList
				cards={config.cards}
				CardContainerProps={{
					className: style.cardContainer,
					withShadowOnHover: true,
					ButtonProps: {text: TEXT_CONFIG.moreDetails, onClick: handleMoreDetailsClick},
				}}
			/>
		</section>
	);
};
