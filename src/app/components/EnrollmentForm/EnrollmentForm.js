import React, {useState} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {CardContainer, FormButton, InputControl} from '@app/components';
import {getClassName} from '@util/helpers';
import {FORM_FIELD_ENUM} from '@util/constants';
import {TEXT_CONFIG} from '@util/config/text.config';
import {GLOBAL_CONFIG} from '@util/config';

import style from './EnrollmentForm.scss';

const DEFAULT_CONFIG = {
	title: 'Стань востребованным IT специалистом',
	description: 'Оставьте ваш номер телефона и мы проконсультируем вас по любому вопросу обучения и сотрудничества',
	buttonText: 'Получить консультацию',
};

const {form: globalConfig} = GLOBAL_CONFIG;

const INITIAL_VALUE = {
	[globalConfig.field.name.key]: '',
	[globalConfig.field.email.key]: '',
	[globalConfig.field.phone.key]: '',
	[globalConfig.field.question.key]: '',
};

export const EnrollmentForm = ({id, className, config = DEFAULT_CONFIG}) => {
	const {title, description, buttonText, fields = Object.values(FORM_FIELD_ENUM)} = config;

	const [formValue, setFormValue] = useState(() => INITIAL_VALUE);
	const [error, setError] = useState(() => false);
	const [snackBarOpen, setSnackBarOpen] = useState(() => false);

	const handleFormChange = (key, value) => {
		error && setError(false);
		setFormValue({...formValue, [key]: value});
	};

	const handleFormSubmit = () => {
		if (!formValue.phone || !formValue.name) {
			setError(true);
			return;
		}

		const formData = new FormData();

		const description = 'Форма на странице КОНТАКТЫ';

		formData.append('date', dayjs().format('YYYY.MM.DD HH:mm'));
		formData.append('url', window.location.href);
		formData.append('description', description);
		formData.append('name', formValue.name);
		formData.append('email', formValue.email);
		formData.append('phone', formValue.phone);
		formData.append('question', formValue.question);

		fetch(`${window.location.origin}/telegram.php`, {method: 'post', body: formData})
			.then((response) => {
				console.log(response);
				setFormValue(INITIAL_VALUE);
				setSnackBarOpen(true);
			})
			.catch((error) => console.error(error));
	};

	return (
		<CardContainer id={id} className={getClassName(style.wrapper, className)} withHeadLine>
			<h3>{title}</h3>
			<p className={style.description}>{description}</p>

			<div className={style.form}>
				{fields.includes(FORM_FIELD_ENUM.NAME) && (
					<div className={style.formControl}>
						<InputControl
							label={globalConfig.field.name.label}
							placeholder={globalConfig.field.name.placeholder}
							value={formValue.name}
							onChange={(value) => handleFormChange(globalConfig.field.name.key, value)}
							error={error}
							errorText={globalConfig.validation.required}
						/>
					</div>
				)}
				{fields.includes(FORM_FIELD_ENUM.EMAIL) && (
					<div className={style.formControl}>
						<InputControl
							label={globalConfig.field.email.label}
							placeholder={globalConfig.field.email.placeholder}
							value={formValue.email}
							onChange={(value) => handleFormChange(globalConfig.field.email.key, value)}
						/>
					</div>
				)}
				{fields.includes(FORM_FIELD_ENUM.PHONE) && (
					<div className={style.formControl}>
						<InputControl
							label={globalConfig.field.phone.label}
							placeholder={globalConfig.field.phone.placeholder}
							value={formValue.phone}
							onChange={(value) => handleFormChange(globalConfig.field.phone.key, value)}
							error={error}
							errorText={globalConfig.validation.required}
						/>
					</div>
				)}
				{fields.includes(FORM_FIELD_ENUM.QUESTION) && (
					<div className={style.formControl}>
						<InputControl
							label={globalConfig.field.question.label}
							placeholder={globalConfig.field.question.placeholder}
							value={formValue.question}
							onChange={(value) => handleFormChange(globalConfig.field.question.key, value)}
							multiline
						/>
					</div>
				)}

				<FormButton classes={{root: style.button, text: style.button_text}} onClick={handleFormSubmit}>
					{buttonText}
				</FormButton>
			</div>

			<Snackbar open={snackBarOpen} autoHideDuration={3000} onClose={() => setSnackBarOpen(false)}>
				<MuiAlert elevation={6} variant='filled'>
					{TEXT_CONFIG.successMessage}
				</MuiAlert>
			</Snackbar>
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
