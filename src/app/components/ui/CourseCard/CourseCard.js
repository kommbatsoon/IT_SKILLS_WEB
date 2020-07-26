import React from 'react';

import {COURSE_ENUM} from '@util/constants';

import style from './CourseCard.scss';

const CONFIG = {
	[COURSE_ENUM.IOS]: {
		title: 'КТО ТАКОЙ iOS-РАЗРАБОТЧИК?',
		description1:
			'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
			'и обновлений для устройств, созданных под брендом Apple:\n' +
			'iPad, iPod, iPhone, наручные часы Watch.',
		description2:
			'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift,' +
			'популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter,' +
			'средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, а с опытом достигает 300 тысяч рублей в месяц',
	},
	[COURSE_ENUM.FRONTEND]: {
		title: 'КТО ТАКОЙ WEB-РАЗРАБОТЧИК?',
		description1:
			'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
			'и обновлений для устройств, созданных под брендом Apple:\n' +
			'iPad, iPod, iPhone, наручные часы Watch.',
		description2:
			'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift,' +
			'популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter,' +
			'средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, а с опытом достигает 300 тысяч рублей в месяц',
	},
	[COURSE_ENUM.WEB_DESIGN]: {
		title: 'КТО ТАКОЙ web-дизайнер?',
		description1:
			'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
			'и обновлений для устройств, созданных под брендом Apple:\n' +
			'iPad, iPod, iPhone, наручные часы Watch.',
		description2:
			'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift,' +
			'популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter,' +
			'средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, а с опытом достигает 300 тысяч рублей в месяц',
	},
	[COURSE_ENUM.ANDROID]: {
		title: 'КТО ТАКОЙ android-РАЗРАБОТЧИК?',
		description1:
			'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
			'и обновлений для устройств, созданных под брендом Apple:\n' +
			'iPad, iPod, iPhone, наручные часы Watch.',
		description2:
			'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift,' +
			'популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter,' +
			'средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, а с опытом достигает 300 тысяч рублей в месяц',
	},
};

export const CourseCard = ({type = COURSE_ENUM.IOS}) => {
	const config = CONFIG[type];

	return (
		<div className={style.wrapper}>
			<div className={style.line} />
			<div className={style.content}>
				<h2>{config.title}</h2>
				<p className={style.description}>{config.description1}</p>
				<p className={style.description}>{config.description2}</p>
			</div>
			<CourseImage type={type} className={style.image} />
		</div>
	);
};

const CourseImage = ({type, className}) => {
	switch (type) {
		case COURSE_ENUM.IOS: {
			return <img src={require('@assets/images/ios-card.png')} alt='Image' className={className} />;
		}
		case COURSE_ENUM.FRONTEND: {
			return <img src={require('@assets/images/webDev-card.png')} alt='Image' className={className} />;
		}
		case COURSE_ENUM.WEB_DESIGN: {
			return <img src={require('@assets/images/webDesign-card.png')} alt='Image' className={className} />;
		}
		case COURSE_ENUM.ANDROID: {
			return <img src={require('@assets/images/android-card.png')} alt='Image' className={className} />;
		}
	}
};
