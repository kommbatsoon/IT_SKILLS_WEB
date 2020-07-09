import React from 'react';

import {HorizontalTabs} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';

import style from './PerspectivesSection.scss';

const DEFAULT_CONFIG = {
	sectionTitle: TEXT_CONFIG.sectionTitle.whatPerspective,
	tabs: [
		{
			title: 'Высокооплачиваемая профессия',
			description:
				'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
		},
		{
			title: 'Комфортное рабочее место',
			description:
				'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
		},
		{
			title: 'Постоянный карьерный рост и развитие',
			description:
				'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
		},
		{
			title: 'Удобный график работы',
			description:
				'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
		},
		{
			title: 'Востребованность',
			description:
				'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
		},
	],
};

export const PerspectivesSection = ({config = DEFAULT_CONFIG, className}) => {
	return (
		<section className={getClassName(style.wrapper, className)}>
			<h2>{TEXT_CONFIG.sectionTitle.whatPerspective}</h2>

			<HorizontalTabs tabs={config.tabs} />
		</section>
	);
};
