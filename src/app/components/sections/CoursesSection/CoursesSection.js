import React from 'react';
import PropTypes from 'prop-types';

import {CardList, SectionContainer} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';

import history from '@app/history';

import style from './CoursesSection.scss';

export const CoursesSection = ({items, className}) => {
	const handleMoreDetailsClick = (item) => history.push(item.path);

	return (
		<SectionContainer className={getClassName(style.wrapper, className)}>
			<CardList
				cards={items}
				withFirstActive
				CardContainerProps={{
					withShadowOnHover: true,
					withHeadLine: true,
					ButtonProps: {text: TEXT_CONFIG.moreDetails, onClick: handleMoreDetailsClick},
				}}
				CardContentProps={{tittleClassName: style.cardTitle}}
			/>
		</SectionContainer>
	);
};

CoursesSection.propTypes = {
	items: PropTypes.array,
};
