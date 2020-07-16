import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {APP_ICON} from '@util/constants';
import {getClassName} from '@util/helpers';

import style from './SocialIconsBar.scss';

export const SocialIconsBar = (props) => {
	const {className} = props;

	return (
		<div className={getClassName(style.socialIcons, className)}>
			<Icon name={APP_ICON.vkWhite} className={style.icon} />
			{/*<Icon name={APP_ICON.fbWhite} className={style.icon} />*/}
			<Icon name={APP_ICON.instWhite} className={style.icon} />
		</div>
	);
};

SocialIconsBar.propTypes = {
	className: PropTypes.string,
};
