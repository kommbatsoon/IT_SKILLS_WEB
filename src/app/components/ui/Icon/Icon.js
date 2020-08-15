import React from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '@util/helpers';

import style from './Icon.scss';

export const Icon = ({className, name, children, onClick}) => {
	return (
		<i className={getClassName(style.icon, style[name], className)} onClick={onClick}>
			{children}
		</i>
	);
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.element,
	onClick: PropTypes.func,
};
