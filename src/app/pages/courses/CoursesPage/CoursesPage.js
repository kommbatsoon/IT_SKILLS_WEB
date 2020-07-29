import React, {useEffect} from 'react';

import {CoursesSection, EnrollmentForm, ReviewsSection} from '@app/components';
import {initialPageActions} from '@util/helpers';
import {GLOBAL_CONFIG} from '@util/config';

import style from './CoursesPage.scss';

export const CoursesPage = ({config = GLOBAL_CONFIG.coursesPage}) => {
	useEffect(initialPageActions, []);

	return (
		<>
			<h1 className={style.title}>{config.topSection.title}</h1>
			<CoursesSection id='coursesSection' items={config.coursesSection.items} />
			<ReviewsSection id='reviewsSection' />
			<EnrollmentForm id='enrollmentFormSection' className={style.form} config={config.enrollmentFormSection} />
		</>
	);
};
