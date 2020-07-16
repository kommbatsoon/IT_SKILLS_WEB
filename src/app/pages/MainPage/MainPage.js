import React from 'react';

import {
	AdvantagesSection,
	EnrollmentForm,
	PerspectivesSection,
	CoursesSection,
	CoachesSection,
	ReviewsSection,
	TopSection,
} from '@app/components';

import style from './MainPage.scss';

export const MainPage = () => {
	return (
		<>
			<TopSection />
			<CoursesSection />
			<PerspectivesSection />
			<AdvantagesSection />
			<ReviewsSection />
			<CoachesSection />
			<EnrollmentForm className={style.form} />
		</>
	);
};

//TODO: Update form inputs (initial - grey, onHover/active!!!: gold);
//TODO: Add Active flags and reset on first mouse enter;
//TODO: Update form submit button;
//TODO: Integrate Telegram;
//TODO: Implement 404 page;
//TODO: Implement Courses page;
//TODO: Implement Trial Lessons page;
