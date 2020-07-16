import React from 'react';

import {Button} from '@app/components';
import {ROUTER_CONFIG} from '@util/config/router.config';

import history from '@app/history';
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
			<Button className={style.button} handleClick={() => history.push(ROUTER_CONFIG.MAIN)}>
				{config.buttonText}
			</Button>
		</div>
	);
};
