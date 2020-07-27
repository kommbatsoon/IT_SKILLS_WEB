import React from 'react';

import {Icon, SectionContainer} from '@app/components';
import {getClassName} from '@util/helpers';

import style from './SectionWithItems.scss';

export const SectionWithItems = ({className, config = {}}) => {
	return (
		<SectionContainer className={getClassName(style.wrapper, className)} title={config.title} withContainerWidth>
			<div className={getClassName(style.items, className)}>
				{config.items?.map((item, index) => {
					return (
						<div key={`item-${index}`} className={style.item}>
							<Icon name={item.icon} />
							<h3>{item.title}</h3>
						</div>
					);
				})}
			</div>
		</SectionContainer>
	);
};
