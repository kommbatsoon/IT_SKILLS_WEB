import React from 'react';

import {CourseEnrollmentForm} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {COURSE_ENUM} from '@util/constants';

import style from './CourseTopSection.scss';

const CONFIG = {
	[COURSE_ENUM.IOS]: {
		date: '25 мая в 19:00',
		title: 'по iOS-разработке',
		description: 'Научим с нуля HTML, CSS и JavaScript',
		period: 'за 6 месяцев',
	},
	[COURSE_ENUM.FRONTEND]: {
		date: '25 мая в 19:00',
		title: 'по FRONTEND-разработке',
		description: 'Научим с нуля HTML, CSS и JavaScript',
		period: 'за 6 месяцев',
	},
	[COURSE_ENUM.WEB_DESIGN]: {
		date: '25 мая в 19:00',
		title: 'по WEB-дизайну',
		description: 'Научим с нуля HTML, CSS и JavaScript',
		period: 'за 6 месяцев',
	},
	[COURSE_ENUM.ANDROID]: {
		date: '25 мая в 19:00',
		title: 'по ANDROID-разработке',
		description: 'Научим с нуля HTML, CSS и JavaScript',
		period: 'за 6 месяцев',
	},
};

export const CourseTopSection = ({className, course = COURSE_ENUM.IOS}) => {
	const config = CONFIG[course];

	return (
		<section className={getClassName(style.wrapper, className)}>
			<div className={style.infoWrapper}>
				<p className={style.course}>{TEXT_CONFIG.courseLabel}</p>
				<h1>{config.title}</h1>
				<p className={style.description}>
					{config.description} <span className={style.period}>{config.period}</span>
				</p>
				<CourseImage course={course} className={style.bgImg} />
			</div>

			<CourseEnrollmentForm />
		</section>
	);
};

const CourseImage = ({course, className}) => {
	switch (course) {
		case COURSE_ENUM.IOS: {
			return <img src={require('@assets/images/icons/apple.svg')} alt='Image' className={className} />;
		}
		case COURSE_ENUM.FRONTEND: {
			return <img src={require('@assets/images/icons/webDev.svg')} alt='Image' className={className} />;
		}
		case COURSE_ENUM.WEB_DESIGN: {
			return <img src={require('@assets/images/icons/webDesign.svg')} alt='Image' className={className} />;
		}
		case COURSE_ENUM.ANDROID: {
			return <img src={require('@assets/images/icons/android.svg')} alt='Image' className={className} />;
		}
	}
};
