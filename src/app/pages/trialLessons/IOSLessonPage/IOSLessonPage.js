import React, {useEffect} from 'react';

import {
	CoachSection,
	CourseCard,
	EnrollmentForm,
	HowToGetSection,
	LessonProgramSection,
	LessonTopSection,
	WhoInterestedSection,
} from '@app/components';
import {FORM_CONFIG, TEXT_CONFIG} from '@util/config/text.config';
import {COURSE_ENUM, FORM_FIELD_ENUM} from '@util/constants';

import style from './IOSLessonPage.scss';

export const IOSLessonPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const type = COURSE_ENUM.IOS;

	return (
		<>
			<LessonTopSection type={type} />
			<HowToGetSection />
			<WhoInterestedSection type={type} />
			<CourseCard type={type} />
			<LessonProgramSection type={type} />
			<CoachSection type={type} title={TEXT_CONFIG.sectionTitle.speaker} shortMode />
			<EnrollmentForm
				className={style.form}
				config={FORM_CONFIG.trialLessonPage}
				fields={[FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.EMAIL, FORM_FIELD_ENUM.PHONE]}
			/>
		</>
	);
};
