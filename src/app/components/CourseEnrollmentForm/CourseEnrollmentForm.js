import React, {useState} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import {Button, CardContainer, InputControl} from '@app/components';
import {getClassName} from '@util/helpers';
import {COURSE_ENUM, COURSE_NAME, FORM_FIELD_ENUM} from '@util/constants';
import {TEXT_CONFIG} from '@util/config/text.config';
import {GLOBAL_CONFIG} from '@util/config';

import style from './CourseEnrollmentForm.scss';

const DEFAULT_CONFIG = {
	startDate: '19 мая',
	places: '2/15',
	buttonText: 'Записаться',
};

const {form: globalConfig} = GLOBAL_CONFIG;

const INITIAL_VALUE = {
	[globalConfig.field.phone.key]: '',
};

export const CourseEnrollmentForm = (props) => {
	const {
		className,
		config = DEFAULT_CONFIG,
		fields = Object.values(FORM_FIELD_ENUM),
		course = COURSE_ENUM.IOS,
	} = props;

	const [formValue, setFormValue] = useState(() => INITIAL_VALUE);
	const [error, setError] = useState(() => false);

	const handleFormChange = (key, value) => {
		error && setError(false);

		setFormValue({...formValue, [key]: value});
	};

	const handleFormSubmit = () => {
		if (!formValue.phone) {
			setError(true);
			return;
		}

		const formData = new FormData();

		const description = `Курс - ${COURSE_NAME[course]}`;

		formData.append('date', dayjs().format('YYYY.MM.DD HH:mm'));
		formData.append('url', window.location.href);
		formData.append('description', description);
		formData.append('phone', formValue.phone);

		fetch(`${window.location.origin}/telegram.php`, {method: 'post', body: formData})
			.then((response) => {
				console.log(response);
				setFormValue(INITIAL_VALUE);
			})
			.catch((error) => console.error(error));
	};

	return (
		<CardContainer className={getClassName(style.wrapper, className)} withHeadLine>
			<p className={style.info}>
				{TEXT_CONFIG.groupStart}: <span className={style.highlightedText}>{config.startDate}</span>
			</p>
			<p className={style.info}>
				{TEXT_CONFIG.freePlaces}: <span className={style.highlightedText}>{config.places}</span>
			</p>
			<div className={style.form}>
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

				<Button className={style.button} onClick={handleFormSubmit}>
					{config.buttonText}
				</Button>
			</div>
		</CardContainer>
	);
};

CourseEnrollmentForm.propTypes = {
	className: PropTypes.string,
	course: PropTypes.string,
	config: PropTypes.object,
	fields: PropTypes.array,
};
