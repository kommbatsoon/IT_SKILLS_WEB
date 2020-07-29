import React, {useEffect} from 'react';

import {
	CoachSection,
	CourseProgramSection,
	CourseTopSection,
	EnrollmentForm,
	PriceCardsSection,
	ReviewsSection,
	SectionWithCards,
	SectionWithCheckPoints,
	SectionWithHorizontalTabs,
} from '@app/components';

import {initialPageActions} from '@util/helpers';
import {COURSE_ENUM} from '@util/constants';
import {GLOBAL_CONFIG} from '@util/config';

import style from './CoursePage.scss';

export const CoursePage = ({course = COURSE_ENUM.IOS}) => {
	const config = GLOBAL_CONFIG.coursePage[course];

	useEffect(initialPageActions, []);

	return (
		<>
			<CourseTopSection id='topSection' config={config.topSection} course={config.course} />

			<SectionWithHorizontalTabs id='advantagesSection' items={config.advantagesSection.items} />

			<SectionWithCards
				id='howItGoesSection'
				keyStart='how-goes-card'
				title={config.howGoesSection.title}
				items={config.howGoesSection.items}
				classes={{root: style.howGoesSection}}
			/>

			<SectionWithCheckPoints
				id='learnOnCourseSection'
				title={config.learnOnCourseSection.title}
				items={config.learnOnCourseSection.items}
			/>

			<CoachSection id='coachSection' course={course} title={config.coachSection.title} />

			<CourseProgramSection id='courseProgramSection' course={course} />

			<PriceCardsSection id='priceCardsSection' course={course} />

			<ReviewsSection id='reviewsSection' />

			<EnrollmentForm id='reviewsSection' config={config.enrollmentFormSection} className={style.form} />
		</>
	);
};
