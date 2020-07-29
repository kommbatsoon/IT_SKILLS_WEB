import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {APP_ICON} from '@util/constants';
import {getClassName} from '@util/helpers';

import style from './SocialIcons.scss';

export const SocialIcons = (props) => {
	const {classes} = props;

	return (
		<div className={getClassName(style.socialIcons, classes.root)}>
			<Icon name={APP_ICON.vkWhite} className={getClassName(style.icon, classes.icon)} />
			<Icon name={APP_ICON.fbWhite} className={getClassName(style.icon, classes.icon)} />
			<Icon name={APP_ICON.instWhite} className={getClassName(style.icon, classes.icon)} />
		</div>
	);
};

SocialIcons.propTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string,
		icon: PropTypes.string,
	}),
};
