import React, {useEffect} from 'react';

import {
	CoachSection,
	CourseProgramSection,
	CourseTopSection,
	EnrollmentForm,
	PriceCardsSection,
	ReviewsSection,
	SectionContainer,
	VerticalTabs,
	SectionWithCards,
	SectionWithPoints,
} from '@app/components';
import {FORM_CONFIG, TEXT_CONFIG} from '@util/config/text.config';
import {APP_ICON, COURSE_ENUM, FORM_FIELD_ENUM} from '@util/constants';

import style from './IOSCoursePage.scss';

const CONFIG = {
	[COURSE_ENUM.IOS]: {
		advantagesTabs: [
			{
				icon: APP_ICON.dollar,
				title: 'Удобный формат оплаты',
				description:
					'Оплата в рассрочку или вся стоимость курса сразу, со скидкой 15%. Выбирайте как вам удобнее',
			},
			{
				icon: APP_ICON.blank,
				title: 'Трудоустройство и стажировки',
				description: 'Лучшие выпускники получают предложения по стажировке от наших компаний-партнёров',
			},
			{
				icon: APP_ICON.practice,
				title: 'Основной упор на практику',
				description: 'Наши преподаватели — практикующие специалисты, а не просто теоретики.',
			},
			{
				icon: APP_ICON.support,
				title: 'Постоянная поддержка',
				description: 'Живое общение с преподавателями на занятиях и в чате.',
			},
		],
		howGoesCards: [
			{
				icon: APP_ICON.conference,
				title: 'Конференция в skype',
				description:
					'В установленное время группа подключается к конференции в Skype, созданной преподавателем, для проведения занятия. В зависимости от темы занятия будут длиться от 30 минут до 1,5 часа 3 раза в неделю. В течение занятия вы можете задавать свои вопросы и общаться',
			},
			{
				icon: APP_ICON.home,
				title: 'Домашние задания',
				description:
					'После каждого занятия вы будете получать задание, которое нужно обязательно выполнить. Систематическое невыполнение домашних заданий может привести к тому, что вы вылетите из курса',
			},
			{
				icon: APP_ICON.message,
				title: 'общение с группой и преподавателем',
				description:
					'На протяжении всего курса вы будете состоять в чате с другими учениками, где сможете обсуждать, созваниваться и помогать друг другу. В чате будет и преподаватель, которому также можно задавать вопросы и общаться',
			},
			{
				icon: APP_ICON.diploma,
				title: 'дипломный проект',
				description:
					'В конце курса вы напишите свой собственный проект, который будет первым полноценным приложением в вашем портфолио',
			},
		],
		learnOnCoursePoints: [
			'Работать с iTunes Connect',
			'Разбираться в чужом коде',
			'Ставить и соблюдать сроки',
			'Программировать анимации',
			'Работать с реактивными библиотеками',
			'Работать с многопоточностью в приложениях',
			'Работать с API, в том числе социальных сетей',
			'Создавать мобильные приложения по гайдлайнам iOS',
			'Получишь опыт проектирования клиент-серверных приложений',
			'Привыкнешь писать комментируемый и строго форматированный код',
		],
	},
};

export const IOSCoursePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const type = COURSE_ENUM.IOS;
	const config = CONFIG[type];

	return (
		<>
			<CourseTopSection type={type} />

			<SectionContainer className={style.advantagesSection} withContainerWidth>
				<VerticalTabs tabs={config.advantagesTabs} />
			</SectionContainer>

			<SectionWithCards
				keyStart={'how-goes-card'}
				title={TEXT_CONFIG.sectionTitle.howOnlineTrainingGoes}
				items={config.howGoesCards}
				classes={{root: style.howGoesSection}}
			/>

			<SectionWithPoints title={TEXT_CONFIG.sectionTitle.learnOnCourse} items={config.learnOnCoursePoints} />

			<CoachSection type={type} title={TEXT_CONFIG.sectionTitle.coachOfCourse} />

			<CourseProgramSection type={type} />

			<PriceCardsSection type={type} />

			<ReviewsSection />
			<EnrollmentForm
				className={style.form}
				config={FORM_CONFIG.coursePage}
				fields={[FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.EMAIL, FORM_FIELD_ENUM.PHONE]}
			/>
		</>
	);
};
