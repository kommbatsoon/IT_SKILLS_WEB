import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {APP_ICON} from '@util/constants';

import './ArrowButton.scss';

export const ArrowButton = (props) => {
	const {text, onClick} = props;

	return (
		<button className='arrowButton' onClick={onClick}>
			<span className='text'>{text}</span>
			<Icon className='whiteIcon' name={APP_ICON.rightArrowWhite} />
			<Icon className='blackIcon' name={APP_ICON.rightArrowBlack} />
		</button>
	);
};

ArrowButton.propTypes = {
	onClick: PropTypes.func,
};
