import React from 'react';

import {COURSE_ENUM} from '@util/constants';

import style from './CourseCard.scss';

const CONFIG = {
	[COURSE_ENUM.IOS]: {
		title: 'КТО ТАКОЙ iOS-РАЗРАБОТЧИК?',
		description:
			'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
			'и обновлений для устройств, созданных под брендом Apple:\n' +
			'iPad, iPod, iPhone, наручные часы Watch.\n' +
			'\n' +
			'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift, популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter, средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, \n' +
			'а с опытом достигает 300 тысяч рублей в месяц',
		image: <img src={require('@assets/images/ios-card.png')} alt='Image' className={style.image} />,
	},
	[COURSE_ENUM.FRONTEND]: {
		title: 'КТО ТАКОЙ web-РАЗРАБОТЧИК?',
		description:
			'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
			'и обновлений для устройств, созданных под брендом Apple:\n' +
			'iPad, iPod, iPhone, наручные часы Watch.\n' +
			'\n' +
			'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift, популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter, средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, \n' +
			'а с опытом достигает 300 тысяч рублей в месяц',
		image: <img src={require('@assets/images/webDev-card.png')} alt='Image' className={style.image} />,
	},
	[COURSE_ENUM.WEB_DESIGN]: {
		title: 'КТО ТАКОЙ web-дизайнер?',
		description:
			'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
			'и обновлений для устройств, созданных под брендом Apple:\n' +
			'iPad, iPod, iPhone, наручные часы Watch.\n' +
			'\n' +
			'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift, популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter, средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, \n' +
			'а с опытом достигает 300 тысяч рублей в месяц',
		image: <img src={require('@assets/images/webDesign-card.png')} alt='Image' className={style.image} />,
	},
	[COURSE_ENUM.ANDROID]: {
		title: 'КТО ТАКОЙ android-РАЗРАБОТЧИК?',
		description:
			'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
			'и обновлений для устройств, созданных под брендом Apple:\n' +
			'iPad, iPod, iPhone, наручные часы Watch.\n' +
			'\n' +
			'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift, популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter, средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, \n' +
			'а с опытом достигает 300 тысяч рублей в месяц',
		image: <img src={require('@assets/images/android-card.png')} alt='Image' className={style.image} />,
	},
};

export const CourseCard = ({type = COURSE_ENUM.IOS}) => {
	const config = CONFIG[type];

	return (
		<div className={style.wrapper}>
			<div className={style.line} />
			<div className={style.content}>
				<h2>{config.title}</h2>
				<p>{config.description}</p>
			</div>
			{config.image}
		</div>
	);
};
