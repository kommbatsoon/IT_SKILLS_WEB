import React, {useEffect} from 'react';

import {CoursesSection, EnrollmentForm, ReviewsSection} from '@app/components';
import {FORM_CONFIG, TEXT_CONFIG} from '@util/config/text.config';
import {APP_ICON, FORM_FIELD_ENUM} from '@util/constants';
import {ROUTER_CONFIG} from '@util/config/router.config';

import style from './TrialLessonsPage.scss';

const CONFIG = {
	courses: {
		cards: [
			{
				iconName: APP_ICON.apple,
				title: 'iOS-разработка',
				description: '19 марта в 19:00',
				path: ROUTER_CONFIG.COURSES.IOS,
			},
			{
				iconName: APP_ICON.android,
				title: 'Android-разработка',
				description: '19 марта в 19:00',
				path: ROUTER_CONFIG.COURSES.ANDROID,
			},
			{
				iconName: APP_ICON.webDev,
				title: 'Web-разработка',
				description: '19 марта в 19:00',
				path: ROUTER_CONFIG.COURSES.FRONTEND,
			},
			{
				iconName: APP_ICON.webDesign,
				title: 'WEB-ДИЗАЙН',
				description: '19 марта в 19:00',
				path: ROUTER_CONFIG.COURSES.WEB_DESIGN,
			},
		],
	},
};

export const TrialLessonsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<h1 className={style.title}>{TEXT_CONFIG.pageTitle.trialLessons}</h1>
			<CoursesSection config={CONFIG.courses} />
			<ReviewsSection />
			<EnrollmentForm
				className={style.form}
				config={FORM_CONFIG.trialLessonsPage}
				fields={[FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.PHONE]}
			/>
		</>
	);
};
