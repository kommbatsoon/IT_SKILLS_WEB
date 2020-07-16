import React from 'react';

import {Button} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {ROUTER_CONFIG} from '@util/config/router.config';

import history from '@app/history';

import style from './TopSection.scss';

export const TopSection = ({className}) => {
	const handleMoreDetailsClick = () => history.push(ROUTER_CONFIG.TRIAL_LESSON.LIST);

	return (
		<section className={getClassName(style.wrapper, className)}>
			<h1>{TEXT_CONFIG.mainTitle}</h1>
			<Button className={style.button} handleClick={handleMoreDetailsClick} labelText={TEXT_CONFIG.freeLabel}>
				{TEXT_CONFIG.trialLessonButton}
			</Button>
		</section>
	);
};
