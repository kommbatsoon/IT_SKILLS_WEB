import React from 'react';
import PropTypes from 'prop-types';

import {SectionContainer, VerticalTabs} from '@app/components';

export const SectionWithVerticalTabs = (props) => {
	const {title, items, withContainerWidth, classes} = props;

	return (
		<SectionContainer className={classes.root} title={title} withContainerWidth={withContainerWidth}>
			<VerticalTabs tabs={items} />
		</SectionContainer>
	);
};

SectionWithVerticalTabs.defaultProps = {
	title: '',
	items: [],
	withContainerWidth: true,
	classes: {},
};

SectionWithVerticalTabs.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array,
	withContainerWidth: PropTypes.bool,
	classes: PropTypes.shape({
		root: PropTypes.string,
		cards: PropTypes.string,
		card: PropTypes.string,
	}),
};
