import React from 'react';

import {HoverCardContainer, CardContent} from '@app/components';
import {getClassName} from '@util/helpers';

import style from './AdvantagesSection.scss';

const DEFAULT_CONFIG = {
	sectionTitle: 'Преимущества обучения',
	cards: [
		{
			iconName: 'practice',
			title: 'Упор на практику',
			description:
				'Наши преподаватели — практикующие специалисты, а не просто теоретики. Прямо сейчас они работают над настоящими проектами в компаниях или на фрилансе',
		},
		{
			iconName: 'support',
			title: 'Постоянная поддержка и помощь',
			description:
				'Живое общение с преподавателями на занятиях и в чате, а также с другими учениками в мессенджерах для обсуждения заданий и обмена опытом',
		},
		{
			iconName: 'work',
			title: 'Работа на реальных проектах',
			description:
				'Дипломная работа по заданию от реальных заказчиков позволяет применить полученные навыки, а также станет первым большим приложением в личном портфолио',
		},
		{
			iconName: 'blank',
			title: 'Трудоустройство и стажировки',
			description:
				'Наши курсы дают возможность с нуля освоить востребованную профессию и получить рекомендации по трудоустройству. Лучшие выпускники получают предложения по стажировке от наших компаний-партнёров',
		},
	],
};

export const AdvantagesSection = ({config = DEFAULT_CONFIG, className}) => {
	return (
		<section className={getClassName(style.wrapper, className)}>
			<h2>{config.sectionTitle}</h2>

			<div className={style.cardList}>
				{config.cards.map((card, index) => {
					return (
						<HoverCardContainer key={`advantage-card-${index}`} className={style.card}>
							<CardContent iconName={card.iconName} title={card.title} description={card.description} />
						</HoverCardContainer>
					);
				})}
			</div>
		</section>
	);
};
