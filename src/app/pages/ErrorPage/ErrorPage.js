import React from 'react';

import {Button} from '@app/components';

import style from './ErrorPage.scss';

const DEFAULT_CONFIG = {
	title: '404',
	description: 'Страница не найдена',
	buttonText: 'Вернуться на главную',
};

export const ErrorPage = ({config = DEFAULT_CONFIG}) => {
	return (
		<div className={style.wrapper}>
			<p className={style.errorTitle}>{config.title}</p>
			<p className={style.errorDescription}>{config.description}</p>
			<Button>{config.buttonText}</Button>
		</div>
	);
};
