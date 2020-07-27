import React from 'react';

import {Button} from '@app/components';

import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {COURSE_ENUM} from '@util/constants';

import style from './LessonTopSection.scss';

export const LessonTopSection = ({className, config = {}, course}) => {
	const handleMoreDetailsClick = () => console.log('Signed up');

	return (
		<section className={getClassName(style.wrapper, className)}>
			<p className={style.when}>
				{TEXT_CONFIG.whenLabel}: <span className={style.date}>{config.date}</span>
			</p>
			<h2>{TEXT_CONFIG.freeOnlineLesson}</h2>
			<div className={style.flexWrapper}>
				<h1>{config.title}</h1>
				<Button className={style.button} handleClick={handleMoreDetailsClick}>
					{TEXT_CONFIG.registerLabel}
				</Button>
			</div>
			<CourseImage course={course} className={style.bgImg} />
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
