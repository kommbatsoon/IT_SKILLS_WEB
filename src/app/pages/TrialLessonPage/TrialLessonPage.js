import React, {useEffect} from 'react';

import {
	CoachSection,
	DeveloperCard,
	EnrollmentForm,
	LessonTopSection,
	SectionWithHorizontalTabs,
	SectionWithVerticalTabs,
	SectionWithItems,
} from '@app/components';

import {initialPageActions} from '@util/helpers';
import {COURSE_ENUM} from '@util/constants';
import {GLOBAL_CONFIG} from '@util/config';

import style from './TrialLessonPage.scss';

export const TrialLessonPage = ({course = COURSE_ENUM.IOS}) => {
	const config = GLOBAL_CONFIG.trialLessonPage[course];

	useEffect(initialPageActions, []);

	return (
		<>
			<LessonTopSection id='topSection' config={config.topSection} course={config.course} />

			<SectionWithHorizontalTabs
				id='howToGetSection'
				title={config.howToGetSection.title}
				items={config.howToGetSection.items}
			/>

			<SectionWithItems id='whoInterestedSection' config={config.whoInterestedSection} />

			<DeveloperCard id='developerCardSection' config={config.developerCardSection} course={config.course} />

			<SectionWithVerticalTabs
				id='lessonProgramSection'
				title={config.lessonProgramSection.title}
				items={config.lessonProgramSection.items}
			/>

			<CoachSection id='coachSection' config={config.coachSection} course={config.course} shortMode />

			<EnrollmentForm id='enrollmentFormSection' className={style.form} config={config.enrollmentFormSection} />
		</>
	);
};
