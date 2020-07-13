import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {getClassName} from '@util/helpers';

import style from './CardContent.scss';

export const CardContent = (props) => {
	const {iconName, title, description, className, tittleClassName, subtitle, subtitleClassName} = props;

	return (
		<div className={getClassName(style.cardContent, className)}>
			{iconName && <Icon name={iconName} />}
			{title && <h3 className={getClassName(style.title, tittleClassName)}>{title}</h3>}
			{title && <h4 className={getClassName(style.subtitle, subtitleClassName)}>{subtitle}</h4>}
			{description && <p>{description}</p>}
		</div>
	);
};

export const CardContentPropTypes = {
	iconName: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
	tittleClassName: PropTypes.string,
	subtitle: PropTypes.string,
	subtitleClassName: PropTypes.string,
	description: PropTypes.string,
};

CardContent.propTypes = CardContentPropTypes;
