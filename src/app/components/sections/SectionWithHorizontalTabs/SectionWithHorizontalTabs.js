import React from 'react';
import PropTypes from 'prop-types';

import {HorizontalTabs, SectionContainer} from '@app/components';

export const SectionWithHorizontalTabs = (props) => {
	const {title, items, withContainerWidth, classes} = props;

	return (
		<SectionContainer className={classes.root} title={title} withContainerWidth={withContainerWidth}>
			<HorizontalTabs tabs={items} />
		</SectionContainer>
	);
};

SectionWithHorizontalTabs.defaultProps = {
	title: '',
	items: [],
	withContainerWidth: true,
	classes: {},
};

SectionWithHorizontalTabs.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array,
	withContainerWidth: PropTypes.bool,
	classes: PropTypes.shape({
		root: PropTypes.string,
	}),
};
