import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {getClassName} from '@util/helpers';

import style from './VerticalTabs.scss';

export const VerticalTabs = ({className, tabs}) => {
	return (
		<div className={getClassName(style.tabs, className)}>
			{tabs?.map((tab, index) => {
				return (
					<div key={`vertical-tab-${index}`} className={style.tab}>
						<Icon name={tab.icon} />
						<h3>{tab.title}</h3>
						<div className={style.line} />
						<p className={style.description}>{tab.description}</p>
					</div>
				);
			})}
		</div>
	);
};

VerticalTabs.propTypes = {
	className: PropTypes.string,
	tabs: PropTypes.array,
};
