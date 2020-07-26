import React from 'react';
import PropTypes from 'prop-types';

import {PointList, SectionContainer} from '@app/components';

export const SectionWithPoints = (props) => {
	const {title, items, withContainerWidth, classes} = props;

	return (
		<SectionContainer className={classes.root} title={title} withContainerWidth={withContainerWidth}>
			<PointList points={items} />
		</SectionContainer>
	);
};

SectionWithPoints.defaultProps = {
	keyStart: 'item',
	title: '',
	items: [],
	withContainerWidth: true,
	classes: {},
};

SectionWithPoints.propTypes = {
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
