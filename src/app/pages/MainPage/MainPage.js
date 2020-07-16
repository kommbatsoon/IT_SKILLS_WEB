import React, {useEffect} from 'react';

import {
	AdvantagesSection,
	EnrollmentForm,
	PerspectivesSection,
	CoursesSection,
	CoachesSection,
	ReviewsSection,
	TopSection,
} from '@app/components';

import {FORM_FIELD_ENUM} from '@util/constants';

import style from './MainPage.scss';

export const MainPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<TopSection />
			<CoursesSection />
			<PerspectivesSection />
			<AdvantagesSection />
			<ReviewsSection />
			<CoachesSection />
			<EnrollmentForm className={style.form} fields={[FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.PHONE]} />
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
