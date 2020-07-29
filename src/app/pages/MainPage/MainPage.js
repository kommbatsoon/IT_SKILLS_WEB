import React, {useEffect} from 'react';

import {
	EnrollmentForm,
	CoursesSection,
	CoachesSection,
	ReviewsSection,
	MainTopSection,
	SectionWithVerticalTabs,
	SectionWithCards,
} from '@app/components';

import {initialPageActions} from '@util/helpers';
import {GLOBAL_CONFIG} from '@util/config';

import style from './MainPage.scss';

export const MainPage = ({config = GLOBAL_CONFIG.mainPage}) => {
	useEffect(initialPageActions, []);

	return (
		<>
			<MainTopSection id='topSection' config={config.topSection} />
			<CoursesSection id='coursesSection' items={config.coursesSection.items} />
			<SectionWithVerticalTabs
				id='perspectivesSection'
				title={config.perspectivesSection.title}
				items={config.perspectivesSection.items}
			/>
			<SectionWithCards
				id='advantagesSection'
				keyStart={'advantage-card'}
				title={config.advantagesSection.title}
				items={config.advantagesSection.items}
			/>
			<ReviewsSection id='reviewsSection' />
			<CoachesSection id='coachesSection' />
			<EnrollmentForm id='enrollmentFormSection' className={style.form} config={config.enrollmentFormSection} />
		</>
	);
};

//TODO: Add variables for animation (transition, duration, etc.);
//TODO: implement CourseImage (with className and classes (ios: style.ios, ...);
//TODO: Add button handlers and unify props (onClick, text/children, etc.);
//TODO: From validation and Integration with Telegram;
//TODO: Update form inputs (initial - grey, onHover/active!!!: gold);
//TODO: Reviews section. Add social media links and avatars to config;
