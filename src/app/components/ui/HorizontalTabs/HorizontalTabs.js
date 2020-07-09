import React from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '@util/helpers';

import style from './HorizontalTabs.scss';

export const HorizontalTabs = ({className, tabs}) => {
	return (
		<div className={getClassName(style.tabs, className)}>
			{tabs?.map((tab, index) => {
				return (
					<div key={`horizontal-tab-${index}`} className={style.tab}>
						<h3>{tab.title}</h3>
						<div className={style.line} />
						<div className={style.flexContainer}>
							<p className={style.column}>{tab.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

HorizontalTabs.propTypes = {
	className: PropTypes.string,
	tabs: PropTypes.array,
};
