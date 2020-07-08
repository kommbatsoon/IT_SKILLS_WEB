import React from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '@util/helpers';

import style from './Icon.scss';

const ICON_CLASS = {
	'vk-gold': style.vkGold,
	'fb-white': style.fbWhite,
	'inst-white': style.instWhite,
	practice: style.practice,
	work: style.work,
	support: style.support,
	blank: style.blank,
};

export const Icon = ({className, name, children}) => {
	return <i className={getClassName(style.icon, ICON_CLASS[name], className)}>{children}</i>;
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.element,
};
