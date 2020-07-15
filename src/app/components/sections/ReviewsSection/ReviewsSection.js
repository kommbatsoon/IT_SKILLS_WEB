import React from 'react';

import {Carousel} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';

import style from './ReviewsSection.scss';

const DEFAULT_CONFIG = {
	sectionTitle: TEXT_CONFIG.sectionTitle.reviews,
	slides: [
		{
			name: 'Кирилл',
			jobTitle: 'AEM Java Developer - Axamit',
			socialMedia: [],
			comment:
				'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
		},
		{
			name: 'Виктор Блуд',
			jobTitle: 'AEM Java Developer - Axamit',
			socialMedia: [],
			comment:
				'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
		},
		{
			name: 'Денис Семенихин',
			jobTitle: 'AEM Java Developer - Axamit',
			socialMedia: [],
			comment:
				'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
		},
	],
};

export const ReviewsSection = ({config = DEFAULT_CONFIG, className}) => {
	return (
		<section className={getClassName(style.wrapper, className)}>
			<h2>{config.sectionTitle}</h2>
			<Carousel slides={config.slides} />
		</section>
	);
};
