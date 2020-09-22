import React from 'react';

import {Button} from '@app/components';
import {ROUTER_CONFIG} from '@util/config/router.config';
import {GLOBAL_CONFIG} from '@util/config';

import history from '@app/history';
import style from './ErrorPage.scss';

export const ErrorPage = () => {
	const config = GLOBAL_CONFIG.errorPage[404];

	return (
		<div className={style.wrapper}>
			<p className={style.errorTitle}>{config.title}</p>
			<p className={style.errorDescription}>{config.description}</p>
			<Button className={style.button} onClick={() => history.push(ROUTER_CONFIG.MAIN)}>
				{config.buttonText}
			</Button>
		</div>
	);
};
