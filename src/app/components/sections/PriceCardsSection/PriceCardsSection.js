import React from 'react';

import {Button, CardContainer, FormButton, SectionContainer} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {COURSE_ENUM} from '@util/constants';

import style from './PriceCardsSection.scss';

const CURRENCY = {
	BYN: 'BYN',
	RUB: 'RUB',
};

const PRICE_CARDS_CONFIG = {
	[COURSE_ENUM.IOS]: {
		packages: [
			{
				priceData: {
					value: 1300,
					currency: CURRENCY.BYN,
					sale: 15,
				},
				buyersChoice: true,
				paymentType: 'Оплата сразу',
				buttonText: 'Оплатить сразу',
			},
			{
				priceData: {
					value: 1500,
					currency: CURRENCY.BYN,
				},
				paymentType: 'В рассрочку',
				buttonText: 'Купить в рассрочку',
			},
		],
	},
};

export const PriceCardsSection = ({type = COURSE_ENUM.IOS, className}) => {
	const config = PRICE_CARDS_CONFIG[type];
	const handleSignUpClick = () => console.log('Записаться на курс: ', config);

	return (
		<SectionContainer
			title={TEXT_CONFIG.sectionTitle.iosPrice}
			className={getClassName(style.wrapper, className)}
			withContainerWidth
		>
			<div className={style.flexContainer}>
				{config.packages.map((packageData, index) => {
					const active = packageData.buyersChoice;

					return (
						<CardContainer
							key={`priceCard-${index}`}
							className={style.card}
							withHeadLine={packageData.buyersChoice}
							withShadowOnHover={!active}
						>
							<div
								className={getClassName(
									style.priceContainer,
									packageData.buyersChoice && style.buyersChoice,
								)}
							>
								<span className={style.price}>
									{packageData.priceData.value} {packageData.priceData.currency}
								</span>
								{packageData.priceData.sale && (
									<span className={style.sale}>-{packageData.priceData.sale}%</span>
								)}
								{packageData.buyersChoice && (
									<div className={style.buyersChoice_label}>{TEXT_CONFIG.buyersChoice}</div>
								)}
							</div>

							<p className={style.paymentType}>{packageData.paymentType}</p>

							{active && (
								<Button className={style.button} onClick={handleSignUpClick}>
									{packageData.buttonText}
								</Button>
							)}
							{!active && (
								<FormButton
									className={style.button}
									onClick={handleSignUpClick}
									text={packageData.buttonText}
								/>
							)}
						</CardContainer>
					);
				})}
			</div>
		</SectionContainer>
	);
};
