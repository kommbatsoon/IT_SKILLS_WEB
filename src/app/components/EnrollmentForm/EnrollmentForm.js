import React from 'react';

import {Button, CardContainer, Input} from '@app/components';

import style from './EnrollmentForm.scss';

const DEFAULT_CONFIG = {
	title: 'Стань востребованным IT специалистом',
	description: 'Оставьте ваш номер телефона и мы проконсультируем вас по любому вопросу обучения и сотрудничества',
	buttonText: 'Получить консультацию',
};

export const EnrollmentForm = ({config = DEFAULT_CONFIG}) => {
	return (
		<CardContainer className={style.wrapper} withHeadLine>
			<h3>{config.title}</h3>
			<p className={style.description}>{config.description}</p>

			<div className={style.form}>
				<div className={style.formControl}>
					<Input label='Имя и Фамилия' placeholder='Иван Иванов' />
				</div>
				<div className={style.formControl}>
					<Input label='Email' placeholder='emaill@gmail.com' />
				</div>
				<div className={style.formControl}>
					<Input label='Номер телефона' placeholder='+375 (' />
				</div>
				<Button className={style.button}>{config.buttonText}</Button>
			</div>
		</CardContainer>
	);
};
