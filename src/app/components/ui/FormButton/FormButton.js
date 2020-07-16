import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {APP_ICON} from '@util/constants';
import {getClassName} from '@util/helpers';

import style from './FormButton.scss';

export const FormButton = (props) => {
	const {text, onClick, className} = props;

	return (
		<button className={getClassName(style.button, className)} onClick={onClick}>
			<span className={style.text}>{text}</span>
			<Icon className={style.blackIcon} name={APP_ICON.rightArrowBlack} />
		</button>
	);
};

FormButton.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};
