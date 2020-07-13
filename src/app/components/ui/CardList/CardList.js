import React from 'react';
import PropTypes from 'prop-types';

import {CardContainer, CardContent} from '@app/components';
import {getClassName} from '@util/helpers';

import {CardContentPropTypes} from '@app/components/ui/CardContent/CardContent';
import {CardContainerPropTypes} from '@app/components/ui/CardContainer/CardContainer';

import style from './CardList.scss';

export const CardList = ({className, cards, CardContainerProps = {}, CardContentProps = {}}) => {
	return (
		<div className={getClassName(style.cardList, className)}>
			{cards.map((card, index) => {
				return (
					<CardContainer key={`card-${index}`} className={style.card} card={card} {...CardContainerProps}>
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
	CardContainerProps: PropTypes.shape(CardContainerPropTypes),
	CardContentProps: PropTypes.shape(CardContentPropTypes),
};
