import React from 'react';

import {VerticalTabs} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {APP_ICON} from '@util/constants';

import style from './HowToGetSection.scss';

const DEFAULT_CONFIG = {
	tabs: [
		{
			icon: APP_ICON.signUp,
			title: '1. Регистрируйся',
			description: 'Заполни контактную информацию в форме регистрации',
		},
		{
			icon: APP_ICON.consult,
			title: '2. Мы позвоним',
			description: 'Заполни контактную информацию в форме регистрации',
		},
		{
			icon: APP_ICON.calendar,
			title: '3. Напомним',
			description: 'Заполни контактную информацию в форме регистрации',
		},
		{
			icon: APP_ICON.door,
			title: '4. Присоединяйся',
			description: 'Заполни контактную информацию в форме регистрации',
		},
	],
};

export const HowToGetSection = ({config = DEFAULT_CONFIG, className}) => {
	return (
		<section className={getClassName(style.wrapper, className)}>
			<h2>{TEXT_CONFIG.sectionTitle.howToGet}</h2>
			<VerticalTabs tabs={config.tabs} />
		</section>
	);
};
