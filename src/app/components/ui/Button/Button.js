import React from 'react';

import style from './Button.scss';

export const Button = (props) => {
	const {children} = props;

	return <button className={style.button}>{children}</button>;
};
