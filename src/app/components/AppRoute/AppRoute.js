import React from 'react';
import {Route} from 'react-router';

import {Footer, Header} from '@app/components';

export const AppRoute = ({component, ...rest}) => {
	const renderAppContainer = (Component) => (props) => {
		return (
			<div className='app-container'>
				<Header />
				<Component {...props} />
				<Footer />
			</div>
		);
	};

	return <Route {...rest} render={renderAppContainer(component)} />;
};
