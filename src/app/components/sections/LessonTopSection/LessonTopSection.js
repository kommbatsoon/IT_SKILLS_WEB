import React from 'react';

import {Button, CourseImage} from '@app/components';

import {getClassName, scrollTo} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';

import style from './LessonTopSection.scss';

export const LessonTopSection = ({className, config = {}, course, actionAnchor = ''}) => {
	const handleRegisterClick = () => {
		scrollTo(actionAnchor);
	};

	return (
		<section className={getClassName(style.wrapper, className)}>
			<p className={style.when}>
				{TEXT_CONFIG.whenLabel}: <span className={style.date}>{config.date}</span>
			</p>
			<h2>{TEXT_CONFIG.freeOnlineLesson}</h2>
			<div className={style.flexWrapper}>
				<h1>{config.title}</h1>
				<Button className={style.button} onClick={handleRegisterClick}>
					{TEXT_CONFIG.registerLabel}
				</Button>
			</div>
			<CourseImage course={course} classes={{root: style.bgImg}} />
		</section>
	);
};
