import React from 'react';

import {Icon} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {APP_ICON, COURSE_ENUM} from '@util/constants';

import style from './WhoInterestedSection.scss';

const ITEMS_CONFIG = {
	[COURSE_ENUM.IOS]: [
		{
			icon: APP_ICON.apple,
			title: 'Начинающим iOS-разработчикам',
		},
		{
			icon: APP_ICON.webDev,
			title: 'Новичкам в программировании',
		},
		{
			icon: APP_ICON.swift,
			title: 'Желающим освоить новый язык программирования',
		},
	],
	[COURSE_ENUM.FRONTEND]: [
		{
			icon: APP_ICON.apple,
			title: 'Начинающим FRONTEND-разработчикам',
		},
		{
			icon: APP_ICON.webDev,
			title: 'Новичкам в программировании',
		},
		{
			icon: APP_ICON.swift,
			title: 'Желающим освоить новый язык программирования',
		},
	],
	[COURSE_ENUM.WEB_DESIGN]: [
		{
			icon: APP_ICON.apple,
			title: 'Начинающим WEB-дизайнерам',
		},
		{
			icon: APP_ICON.webDev,
			title: 'Новичкам в программировании',
		},
		{
			icon: APP_ICON.webDesign,
			title: 'Желающим освоить новый язык программирования',
		},
	],
	[COURSE_ENUM.ANDROID]: [
		{
			icon: APP_ICON.apple,
			title: 'Начинающим ANDROID-разработчикам',
		},
		{
			icon: APP_ICON.webDev,
			title: 'Новичкам в программировании',
		},
		{
			icon: APP_ICON.swift,
			title: 'Желающим освоить новый язык программирования',
		},
	],
};

export const WhoInterestedSection = ({className, type = COURSE_ENUM.IOS}) => {
	return (
		<section className={getClassName(style.wrapper, className)}>
			<h2>{TEXT_CONFIG.sectionTitle.whoInterested}</h2>

			<div className={getClassName(style.items, className)}>
				{ITEMS_CONFIG[type]?.map((item, index) => {
					return (
						<div key={`item-${index}`} className={style.item}>
							<Icon name={item.icon} />
							<h3>{item.title}</h3>
						</div>
					);
				})}
			</div>
		</section>
	);
};
