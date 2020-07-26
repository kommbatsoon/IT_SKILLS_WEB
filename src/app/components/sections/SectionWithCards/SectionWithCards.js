import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {CardContainer, CardContent, SectionContainer} from '@app/components';
import {getClassName} from '@util/helpers';

import style from './SectionWithCards.scss';

export const SectionWithCards = (props) => {
	const {keyStart, title, items, withContainerWidth, classes} = props;

	const [active, setActive] = useState(0);

	const handleMouseEnter = () => {
		setActive(-1);
	};

	return (
		<SectionContainer className={classes.root} title={title} withContainerWidth={withContainerWidth}>
			<div className={getClassName(style.cards, classes.cards)} onMouseEnter={handleMouseEnter}>
				{items?.map((card, index) => {
					return (
						<CardContainer
							key={`${keyStart}-${index}`}
							className={getClassName(style.card, classes.card)}
							withShadowOnHover={active !== index}
						>
							<CardContent iconName={card.icon} title={card.title} description={card.description} />
						</CardContainer>
					);
				})}
			</div>
		</SectionContainer>
	);
};

SectionWithCards.defaultProps = {
	keyStart: 'card',
	title: '',
	items: [],
	withContainerWidth: true,
	classes: {},
};

SectionWithCards.propTypes = {
	keyStart: PropTypes.string,
	title: PropTypes.string,
	items: PropTypes.array,
	withContainerWidth: PropTypes.bool,
	classes: PropTypes.shape({
		root: PropTypes.string,
		cards: PropTypes.string,
		card: PropTypes.string,
	}),
};
