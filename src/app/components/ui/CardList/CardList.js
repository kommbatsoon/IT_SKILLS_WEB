import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {CardContainer, CardContent} from '@app/components';
import {getClassName} from '@util/helpers';

import {CardContentPropTypes} from '@app/components/ui/CardContent/CardContent';
import {CardContainerPropTypes} from '@app/components/ui/CardContainer/CardContainer';

import style from './CardList.scss';

export const CardList = ({className, cards, withFirstActive, CardContainerProps = {}, CardContentProps = {}}) => {
	const [active, setActive] = useState(withFirstActive ? 0 : -1);

	return (
		<div className={getClassName(style.cardList, className)} onMouseEnter={() => setActive(-1)}>
			{cards?.map((card, index) => {
				const isActive = active === index;

				return (
					<CardContainer
						isActive={isActive}
						key={`card-${index}`}
						className={style.card}
						card={card}
						{...CardContainerProps}
					>
						<CardContent
							iconName={card.iconName}
							title={card.title}
							subtitle={card.subtitle}
							description={card.description}
							{...CardContentProps}
						/>
					</CardContainer>
				);
			})}
		</div>
	);
};

CardList.propTypes = {
	children: PropTypes.element,
	className: PropTypes.string,
	withFirstActive: PropTypes.bool,
	CardContainerProps: PropTypes.shape(CardContainerPropTypes),
	CardContentProps: PropTypes.shape(CardContentPropTypes),
};
