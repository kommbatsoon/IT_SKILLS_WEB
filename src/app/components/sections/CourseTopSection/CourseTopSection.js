import React from 'react';

import {Button, CourseEnrollmentForm} from '@app/components';
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
		image: <img src={require('@assets/images/icons/webDev.svg')} alt='Image' className={style.bgImg} />,
	},
	[COURSE_ENUM.WEB_DESIGN]: {
		date: '25 мая в 19:00',
		title: 'по WEB-дизайну',
		description: 'Научим с нуля HTML, CSS и JavaScript',
		period: 'за 6 месяцев',
		image: <img src={require('@assets/images/icons/webDesign.svg')} alt='Image' className={style.bgImg} />,
	},
	[COURSE_ENUM.ANDROID]: {
		date: '25 мая в 19:00',
		title: 'по ANDROID-разработке',
		description: 'Научим с нуля HTML, CSS и JavaScript',
		period: 'за 6 месяцев',
		image: <img src={require('@assets/images/icons/android.svg')} alt='Image' className={style.bgImg} />,
	},
};

export const CourseTopSection = ({className, type = COURSE_ENUM.IOS}) => {
	const config = CONFIG[type];

	return (
		<section className={getClassName(style.wrapper, className)}>
			<div className={style.infoWrapper}>
				<p className={style.course}>{TEXT_CONFIG.courseLabel}</p>
				<h1>{config.title}</h1>
				<p className={style.description}>
					{config.description} <span className={style.period}>{config.period}</span>
				</p>
				<Image type={type} />
			</div>

			<CourseEnrollmentForm />
		</section>
	);
};

const Image = ({type}) => {
	switch (type) {
		case COURSE_ENUM.IOS: {
			return <img src={require('@assets/images/icons/apple.svg')} alt='Image' className={style.bgImg} />;
		}
		default: {
			return <img src={require('@assets/images/icons/apple.svg')} alt='Image' className={style.bgImg} />;
		}
	}
};
