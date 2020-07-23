import React from 'react';

import {Icon} from '@app/components';
import {getClassName} from '@util/helpers';
import {APP_ICON} from '@util/constants';

import style from './PointList.scss';

export const PointList = ({points = [], className, pointClassName}) => {
	return (
		<div className={className}>
			{points.map((point, index) => {
				return (
					<div key={`item-${index}`} className={getClassName(style.point, pointClassName)}>
						<Icon name={APP_ICON.check} className={style.icon} />
						{point}
					</div>
				);
			})}
		</div>
	);
};
