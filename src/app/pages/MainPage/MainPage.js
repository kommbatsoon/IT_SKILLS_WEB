import React from 'react';

import {AdvantagesSection, EnrollmentForm, PerspectivesSection} from '@app/components';

import style from './MainPage.scss';

export const MainPage = () => {
	return (
		<div className='page-wrapper'>
			<PerspectivesSection />
			<AdvantagesSection />
			<EnrollmentForm className={style.form} />
		</div>
	);
};
