import React from 'react';
import PropTypes from 'prop-types';

import {CardContainer, FormButton, Input} from '@app/components';
import {getClassName} from '@util/helpers';
import {FORM_FIELD_ENUM} from '@util/constants';

import style from './EnrollmentForm.scss';

const DEFAULT_CONFIG = {
	title: 'Стань востребованным IT специалистом',
	description: 'Оставьте ваш номер телефона и мы проконсультируем вас по любому вопросу обучения и сотрудничества',
	buttonText: 'Получить консультацию',
};

export const EnrollmentForm = ({className, config = DEFAULT_CONFIG}) => {
	const {title, description, buttonText, fields = Object.values(FORM_FIELD_ENUM)} = config;

	return (
		<CardContainer className={getClassName(style.wrapper, className)} withHeadLine>
			<h3>{title}</h3>
			<p className={style.description}>{description}</p>

			<div className={style.form}>
				{fields.includes(FORM_FIELD_ENUM.NAME) && (
					<div className={style.formControl}>
						<Input label='Имя и Фамилия' placeholder='Иван Иванов' />
					</div>
				)}
				{fields.includes(FORM_FIELD_ENUM.EMAIL) && (
					<div className={style.formControl}>
						<Input label='Email' placeholder='emaill@gmail.com' />
					</div>
				)}
				{fields.includes(FORM_FIELD_ENUM.PHONE) && (
					<div className={style.formControl}>
						<Input label='Номер телефона' placeholder='+375 (' />
					</div>
				)}
				{fields.includes(FORM_FIELD_ENUM.QUESTION) && (
					<div className={style.formControl}>
						<Input label='Ваш вопрос' placeholder='Напишите ваш вопрос' multiline />
					</div>
				)}

				<FormButton className={style.button} text={buttonText} />
			</div>
		</CardContainer>
	);
};

EnrollmentForm.propTypes = {
	className: PropTypes.string,
	config: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		buttonText: PropTypes.string,
		fields: PropTypes.array,
	}),
};
