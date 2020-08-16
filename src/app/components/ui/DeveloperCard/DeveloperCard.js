import React from 'react';

import {COURSE_ENUM} from '@util/constants';

import style from './DeveloperCard.scss';

export const DeveloperCard = ({config = {}, course}) => {
	return (
		<>
			<div className={style.wrapper_desktop}>
				<div className={style.line} />
				<div className={style.content}>
					<h2>{config.title}</h2>
					<p className={style.description}>{config.description1}</p>
					<p className={style.description}>{config.description2}</p>
				</div>
				<CourseCardImage course={course} className={style.image} />
			</div>
			<div className={style.wrapper_mobile}>
				<div className={style.line} />
				<CourseCardImage course={course} className={style.image} />
				<div className={style.content}>
					<h2>{config.title}</h2>
					<p className={style.description}>{config.description1}</p>
					<p className={style.description}>{config.description2}</p>
				</div>
			</div>
		</>
	);
};

const CourseCardImage = ({course = COURSE_ENUM.IOS, className}) => {
	switch (course) {
		case COURSE_ENUM.IOS: {
			return <img src={require('@assets/images/ios-card.png')} alt='Image' className={className} />;
		}
		case COURSE_ENUM.FRONTEND: {
			return <img src={require('@assets/images/webDev-card.png')} alt='Image' className={className} />;
		}
		case COURSE_ENUM.WEB_DESIGN: {
			return <img src={require('@assets/images/webDesign-card.png')} alt='Image' className={className} />;
		}
		case COURSE_ENUM.ANDROID: {
			return <img src={require('@assets/images/android-card.png')} alt='Image' className={className} />;
		}
	}
};
