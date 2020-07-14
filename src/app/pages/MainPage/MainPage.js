import React from 'react';

import {AdvantagesSection, EnrollmentForm, PerspectivesSection, CoursesSection, CoachesSection} from '@app/components';

import style from './MainPage.scss';

export const MainPage = () => {
	return (
		<div className='page-wrapper'>
			<CoursesSection />
			<PerspectivesSection />
			<AdvantagesSection />
			<CoachesSection />
			<EnrollmentForm className={style.form} />
		</div>
	);
};

//TODO: Update Icons in Header/Fooret (initial - white, onHover: gold)
//TODO: Update form inputs (initial - grey, onHover/active: gold)
//TODO: Add Active flags and reset on first mouse enter
