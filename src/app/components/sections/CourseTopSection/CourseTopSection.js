import React from 'react';

import {CourseEnrollmentForm, CourseImage} from '@app/components';

import {getClassName} from '@util/helpers';
import {COURSE_ENUM} from '@util/constants';
import {TEXT_CONFIG} from '@util/config/text.config';
import {GLOBAL_CONFIG} from '@util/config';

import style from './CourseTopSection.scss';

export const CourseTopSection = ({className, course = COURSE_ENUM.IOS}) => {
	const config = GLOBAL_CONFIG.courseTopSection[course];

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
