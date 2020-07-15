import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {APP_ICON} from '@util/constants';
import {getClassName} from '@util/helpers';

import './SlideButton.scss';

export const SlideButton = (props) => {
	const {onClick, leftSide, wrapperClassName} = props;

	return (
		<div className={getClassName(wrapperClassName)}>
			<button className='slideButton' onClick={onClick}>
				<Icon className={getClassName(leftSide && 'leftSideIcon')} name={APP_ICON.rightArrowWhite} />
			</button>
		</div>
	);
};

SlideButton.propTypes = {
	onClick: PropTypes.func,
	leftSide: PropTypes.bool,
	wrapperClassName: PropTypes.string,
};
