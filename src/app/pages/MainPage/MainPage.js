import React from 'react';

import {
	AdvantagesSection,
	EnrollmentForm,
	PerspectivesSection,
	CoursesSection,
	CoachesSection,
	ReviewsSection,
} from '@app/components';

import style from './MainPage.scss';

export const MainPage = () => {
	return (
		<div className='page-wrapper'>
			<CoursesSection />
			<PerspectivesSection />
			<AdvantagesSection />
			<ReviewsSection />
			<CoachesSection />
			<EnrollmentForm className={style.form} />
		</div>
	);
};

//TODO: Update form inputs (initial - grey, onHover/active: gold)
//TODO: Add Active flags and reset on first mouse enter
