import React from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '@util/helpers';

import style from './HoverCardContainer.scss';

export const HoverCardContainer = ({className, children}) => {
	return <div className={getClassName(style.card, className)}>{children}</div>;
};

HoverCardContainer.propTypes = {
	children: PropTypes.element,
	className: PropTypes.string,
};
