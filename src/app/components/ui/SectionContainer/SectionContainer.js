import React from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '@util/helpers';

import style from './SectionContainer.scss';

export const SectionContainer = ({title, className, titleClassName, children, withContainerWidth}) => {
	return (
		<section className={getClassName(withContainerWidth && style.wrapper, className)}>
			{title && <h2 className={getClassName(style.title, titleClassName)}>{title}</h2>}

			{children}
		</section>
	);
};

SectionContainer.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	titleClassName: PropTypes.string,
	withContainerWidth: PropTypes.bool,
};
