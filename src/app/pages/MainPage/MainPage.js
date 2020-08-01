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

//TODO: implement CourseImage (with className and classes (ios: style.ios, ...);
//TODO: Reviews section. Add social media links and avatars to config;
//TODO: Who interested points - turn around animation on hover;
