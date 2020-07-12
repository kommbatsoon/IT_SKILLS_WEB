import React from 'react';
import PropTypes from 'prop-types';

import {CardContainer, CardContent} from '@app/components';
import {getClassName} from '@util/helpers';

import style from './CardList.scss';

export const CardList = ({className, cards, CardContainerProps = {}, CardContentProps = {}}) => {
	return (
		<div className={getClassName(style.cardList, className)}>
			{cards.map((card, index) => {
				return (
					<CardContainer key={`card-${index}`} className={style.card} {...CardContainerProps}>
						<CardContent
							iconName={card.iconName}
							title={card.title}
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
	CardContainerProps: PropTypes.shape({
		children: PropTypes.element,
		className: PropTypes.string,
		withShadowOnHover: PropTypes.bool,
		withHeadLine: PropTypes.bool,
	}),
	CardContentProps: PropTypes.shape({
		iconName: PropTypes.string,
		className: PropTypes.string,
		title: PropTypes.string,
		tittleClassName: PropTypes.string,
		description: PropTypes.string,
	}),
};
