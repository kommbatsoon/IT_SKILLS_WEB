import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {APP_ICON} from '@util/constants';
import {getClassName} from '@util/helpers';

import style from './Button.scss';

export const Button = (props) => {
	const {children, className, handleClick, labelText} = props;

	return (
		<button className={getClassName(style.button, className)} onClick={handleClick}>
			{children}
			<Icon className={style.icon} name={APP_ICON.rightArrowBlack} />
			{labelText && <div className={style.label}>{labelText}</div>}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	className: PropTypes.string,
	labelText: PropTypes.string,
	handleClick: PropTypes.func,
};
