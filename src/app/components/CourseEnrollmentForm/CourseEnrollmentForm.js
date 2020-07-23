import React from 'react';
import PropTypes from 'prop-types';

import {Button, CardContainer, Input} from '@app/components';
import {getClassName} from '@util/helpers';
import {FORM_FIELD_ENUM} from '@util/constants';

import {TEXT_CONFIG} from '@util/config/text.config';
import style from './CourseEnrollmentForm.scss';

const DEFAULT_CONFIG = {
	startDate: '19 мая',
	places: '2/15',
	buttonText: 'Записаться',
};

export const CourseEnrollmentForm = ({className, config = DEFAULT_CONFIG, fields = Object.values(FORM_FIELD_ENUM)}) => {
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
						<Input label='Номер телефона' placeholder='+375 (' />
					</div>
				)}

				<Button className={style.button}>{config.buttonText}</Button>
			</div>
		</CardContainer>
	);
};

CourseEnrollmentForm.propTypes = {
	className: PropTypes.string,
	config: PropTypes.object,
	fields: PropTypes.array,
};
