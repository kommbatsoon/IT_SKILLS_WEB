import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {APP_ICON} from '@util/constants';
import {getClassName} from '@util/helpers';
import {Screen} from '@util/srceen';

import style from './FormButton.scss';

export const FormButton = (props) => {
	const {children, onClick, classes} = props;

	return (
		<button className={getClassName(style.button, classes.root)} onClick={onClick}>
			<span className={getClassName(style.text, classes.text)}>{children}</span>
			{Screen.isDesktop && <Icon className={style.blackIcon} name={APP_ICON.rightArrowBlack} />}
		</button>
	);
};

FormButton.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string,
		text: PropTypes.string,
	}),
	children: PropTypes.string,
	onClick: PropTypes.func,
};
