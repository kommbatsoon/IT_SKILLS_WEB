import React from 'react';

import {Button, CardContainer, FormButton, SectionContainer} from '@app/components';
import {getClassName, scrollTo} from '@util/helpers';
import {COURSE_ENUM} from '@util/constants';
import {TEXT_CONFIG} from '@util/config/text.config';
import {GLOBAL_CONFIG} from '@util/config';

import style from './PriceCardsSection.scss';

export const PriceCardsSection = ({course = COURSE_ENUM.IOS, actionAnchor, className}) => {
	const config = GLOBAL_CONFIG.priceCardsSection[course];

	const handleSignUpClick = () => {
		scrollTo(actionAnchor);
	};

	return (
		<SectionContainer title={config.title} className={getClassName(style.wrapper, className)} withContainerWidth>
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
								<FormButton classes={{root: style.button}} onClick={handleSignUpClick}>
									{packageData.buttonText}
								</FormButton>
							)}
						</CardContainer>
					);
				})}
			</div>
		</SectionContainer>
	);
};
