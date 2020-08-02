import React from 'react';

import {CourseEnrollmentForm, CourseImage} from '@app/components';

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
				<CourseImage course={course} classes={{root: style.bgImg}} />
			</div>
			<CourseEnrollmentForm course={course} />
		</section>
	);
};
