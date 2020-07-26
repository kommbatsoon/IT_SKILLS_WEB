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
//TODO: Integrate Telegram;
//TODO: Make common config (by course);
//TODO: Replace type with course;
//TODO: Move all variables to var file;
//TODO: Use one gold gradient;
//TODO: Unificate button props (onClick, text, etc.);
//TODO: Show/collapse program;

//TODO: Course page. How goes cards height (to common);
//TODO: Create SectionWith... components (verticalTabs, horizontalTabs);
