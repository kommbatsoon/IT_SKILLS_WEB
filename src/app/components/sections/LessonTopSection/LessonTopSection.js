import React from 'react';

import {Button} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {COURSE_ENUM} from '@util/constants';

import style from './LessonTopSection.scss';

const CONFIG = {
	[COURSE_ENUM.IOS]: {
		date: '25 мая в 19:00',
		title: 'по iOS-разработке',
		image: <img src={require('@assets/images/icons/apple.svg')} alt='Image' className={style.bgImg} />,
	},
	[COURSE_ENUM.FRONTEND]: {
		date: '25 мая в 19:00',
		title: 'по FRONTEND-разработке',
		image: <img src={require('@assets/images/icons/webDev.svg')} alt='Image' className={style.bgImg} />,
	},
	[COURSE_ENUM.WEB_DESIGN]: {
		date: '25 мая в 19:00',
		title: 'по WEB-дизайну',
		image: <img src={require('@assets/images/icons/webDesign.svg')} alt='Image' className={style.bgImg} />,
	},
	[COURSE_ENUM.ANDROID]: {
		date: '25 мая в 19:00',
		title: 'по ANDROID-разработке',
		image: <img src={require('@assets/images/icons/android.svg')} alt='Image' className={style.bgImg} />,
	},
};

export const LessonTopSection = ({className, type = COURSE_ENUM.IOS}) => {
	const config = CONFIG[type];

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
					{TEXT_CONFIG.signUpLabel}
				</Button>
			</div>
			{config.image}
		</section>
	);
};
