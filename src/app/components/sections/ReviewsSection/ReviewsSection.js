import React from 'react';

import {Carousel, SectionContainer} from '@app/components';

import {getClassName} from '@util/helpers';
import {GLOBAL_CONFIG} from '@util/config';

import style from './ReviewsSection.scss';

export const ReviewsSection = ({config = GLOBAL_CONFIG.reviewsSection, className}) => {
	return (
		<SectionContainer withContainerWidth className={getClassName(style.wrapper, className)} title={config.title}>
			<Carousel slides={config.items} />
		</SectionContainer>
	);
};
