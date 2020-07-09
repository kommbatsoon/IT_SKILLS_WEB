import React from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '@util/helpers';

import style from './Button.scss';

export const Button = (props) => {
	const {children, className} = props;

	return <button className={getClassName(style.button, className)}>{children}</button>;
};

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	className: PropTypes.string,
};
