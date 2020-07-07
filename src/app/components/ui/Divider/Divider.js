import React from 'react';

import {getClassName} from '@util/helpers';

import style from './Divider.scss';

export const Divider = ({className}) => {
	return <div className={getClassName(style.divider, className)} />;
};
