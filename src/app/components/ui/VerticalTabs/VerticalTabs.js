import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {getClassName} from '@util/helpers';

import style from './VerticalTabs.scss';

export const VerticalTabs = ({className, tabs}) => {
	const [active, setActive] = useState(0);

	return (
		<div className={getClassName(style.tabs, className)} onMouseEnter={() => setActive(-1)}>
			{tabs?.map((tab, index) => {
				const isActive = active === index;

				return (
					<div key={`vertical-tab-${index}`} className={getClassName(style.tab, isActive && style.active)}>
						{tab.icon && <Icon name={tab.icon} />}
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
