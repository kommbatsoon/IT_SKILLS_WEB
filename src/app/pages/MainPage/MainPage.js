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
