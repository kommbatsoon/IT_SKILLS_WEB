import React, {useState} from 'react';

import {Icon} from '@app/components';
import {getClassName} from '@util/helpers';
import {APP_ICON} from '@util/constants';

import style from './PointList.scss';

export const PointList = ({points = [], className, pointClassName}) => {
	const [active, setActive] = useState(0);

	return (
		<div className={getClassName(style.wrapper, className)} onMouseEnter={() => setActive(-1)}>
			{points.map((point, index) => {
				const isActive = active === index;

				return (
					<div
						key={`item-${index}`}
						className={getClassName(style.point, isActive && style.active, pointClassName)}
					>
						<Icon name={APP_ICON.check} className={style.icon} />
						{point}
					</div>
				);
			})}
		</div>
	);
};
