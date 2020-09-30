import React from 'react';
import PropTypes from 'prop-types';

import {getClassName, scrollTo} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';

import style from './CoachSection.scss';
import {COURSE_ENUM} from '@util/constants';
import {Button} from '@app/components';

const COACH_CONFIG = {
	[COURSE_ENUM.FRONTEND]: {
		title: 'Павел Унгур',
		subtitle: 'SENIOR FRONTEND-DEVELOPER',
		description1: 'Автор и преподаватель курса. 5 лет опыта во Fronted-разработке',
		description2:
			'Павел научит тебя разрабатывать сайты и web-приложения, даст полезные советы, лайфхаки, расскажет как успешно устроится на работу и выйти на хороший заработок в этой сфере',
		course: COURSE_ENUM.FRONTEND,
		image: <img src={require('@assets/images/avatars/pavel.png')} alt='Logo' className={style.avatar} />,
		bgImage: <img src={require('@assets/images/icons/webDev.svg')} alt='Icon' className={style.bgImage} />,
	},
	[COURSE_ENUM.IOS]: {
		title: 'Денис Байдан',
		subtitle: 'SENIOR IOS-DEVELOPER',
		description1: 'Автор и преподаватель курса. 7 лет опыта в программировании, 5 лет в iOS-разработке',
		description2:
			'Денис научит тебя красиво и грамотно писать код на Swift, даст полезные советы, лайфхаки, расскажет как успешно устроится на работу и выйти на хороший заработок в этой сфере',
		course: COURSE_ENUM.FRONTEND,
		image: <img src={require('@assets/images/avatars/den.png')} alt='Logo' className={style.avatar} />,
		bgImage: <img src={require('@assets/images/icons/apple.svg')} alt='Icon' className={style.bgImage} />,
	},
};

// Add config from parent

export const CoachSection = ({title, course = COURSE_ENUM.IOS, shortMode = false, actionAnchor, className}) => {
	const config = COACH_CONFIG[course];
	const handleSignUpClick = () => {
		scrollTo(actionAnchor);
	};

	return (
		<section className={getClassName(style.wrapper, className)}>
			<div className={style.leftSide}>
				{config.bgImage}
				{config.image}
			</div>
			<div className={style.rightSide}>
				<h2>{title}</h2>
				<div className={style.info}>
					<h3 className={style.title}>{config.title}</h3>
					<p className={style.subtitle}>{config.subtitle}</p>
					<p className={style.description}>{config.description1}</p>
					{!shortMode && <p className={style.description}>{config.description2}</p>}
					<Button className={style.button} onClick={handleSignUpClick}>
						{TEXT_CONFIG.signUpLabel}
					</Button>
				</div>
			</div>
		</section>
	);
};

CoachSection.propTypes = {
	course: PropTypes.string,
	shortMode: PropTypes.bool,
};
