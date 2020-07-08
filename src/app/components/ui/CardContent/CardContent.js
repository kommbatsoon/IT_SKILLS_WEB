import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {getClassName} from '@util/helpers';

import style from './CardContent.scss';

export const CardContent = ({iconName, title, description, className}) => {
	return (
		<div className={getClassName(style.cardContent, className)}>
			{iconName && <Icon name={iconName} />}
			{title && <h3>{title}</h3>}
			{description && <p>{description}</p>}
		</div>
	);
};

CardContent.propTypes = {
	iconName: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};
