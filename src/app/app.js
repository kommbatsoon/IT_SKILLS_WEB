import React from 'react';
import {Router} from 'react-router';

import AppRouter from '@app/router';
import {Footer, Header} from '@app/components';

import history from '@app/history';

import '@styles/app.scss';

const BASE_URL = document.getElementsByTagName('base')[0].getAttribute('href');

const App = () => {
	return (
		<Router basename={BASE_URL} history={history}>
			<div className='app-container'>
				<Header />
				<AppRouter />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
