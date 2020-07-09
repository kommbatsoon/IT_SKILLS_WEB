import React from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '@util/helpers';

import style from './CardContainer.scss';

export const CardContainer = ({className, children, withShadowOnHover = false, withHeadLine = false}) => {
	return (
		<div
			className={getClassName(
				style.card,
				withShadowOnHover && style.shadowOnHover,
				withHeadLine && style.headLine,
				className,
			)}
		>
			{children}
		</div>
	);
};

CardContainer.propTypes = {
	children: PropTypes.element,
	className: PropTypes.string,
	withShadowOnHover: PropTypes.bool,
	withHeadLine: PropTypes.bool,
};
