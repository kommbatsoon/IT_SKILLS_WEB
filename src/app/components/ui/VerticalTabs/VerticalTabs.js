import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '@util/helpers';

import style from './VerticalTabs.scss';

export const VerticalTabs = ({className, tabs}) => {
	const [active, setActive] = useState(0);

	return (
		<div className={getClassName(style.tabs, className)}>
			{tabs?.map((tab, index) => {
				const isActive = active === index;

				return (
					<div
						key={`horizontal-tab-${index}`}
						className={getClassName(style.tab, isActive && style.active)}
						onMouseEnter={() => setActive(index)}
					>
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

VerticalTabs.propTypes = {
	className: PropTypes.string,
	tabs: PropTypes.array,
};
