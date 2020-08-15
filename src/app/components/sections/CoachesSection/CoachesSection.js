import React from 'react';

import {CardList} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {ROUTER_CONFIG} from '@util/config/router.config';
import {COURSE_ENUM} from '@util/constants';

import history from '@app/history';

import style from './CoachesSection.scss';

const CoachImage = (props) => {
	const {course = COURSE_ENUM.IOS, active = false, className = ''} = props;

	const classString = getClassName(style.avatar, active && style.active, className);

	const image = {
		[COURSE_ENUM.IOS]: <img src={require('@assets/images/avatars/den.png')} alt='Logo' className={classString} />,
		[COURSE_ENUM.FRONTEND]: (
			<img src={require('@assets/images/avatars/pavel.png')} alt='Logo' className={classString} />
		),
	};

	return image[course];
};

const DEFAULT_CONFIG = {
	title: TEXT_CONFIG.sectionTitle.coaches,
	items: [
		{
			title: 'Денис Байдан',
			subtitle: 'SENIOR IOS-DEVELOPER',
			description: 'Автор и преподаватель курса. 7 лет опыта в программировании, 5 лет в iOS-разработке',
			path: ROUTER_CONFIG.COURSES.IOS,
			image: <CoachImage course={COURSE_ENUM.IOS} />,
		},
		{
			title: 'Павел Унгур',
			subtitle: 'SENIOR FRONTEND-DEVELOPER',
			description: 'Преподаватель курсе WEB-разработка. 4 года опыта в разработке',
			path: ROUTER_CONFIG.COURSES.FRONTEND,
			image: <CoachImage course={COURSE_ENUM.FRONTEND} />,
		},
	],
};

export const CoachesSection = ({config = DEFAULT_CONFIG, className}) => {
	const handleMoreDetailsClick = (card) => history.push(card.path);

	return (
		<section className={getClassName(style.wrapper, className)}>
			<h2>{config.title}</h2>

			<CardList
				cards={config.items}
				CardContainerProps={{
					className: style.cardContainer,
					withShadowOnHover: true,
					ButtonProps: {text: TEXT_CONFIG.moreDetails, onClick: handleMoreDetailsClick},
				}}
				CardContentProps={{tittleClassName: style.cardTitle, descriptionClassName: style.cardDescription}}
			/>
		</section>
	);
};
