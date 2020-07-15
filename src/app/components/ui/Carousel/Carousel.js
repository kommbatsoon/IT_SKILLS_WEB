import React from 'react';
import PropTypes from 'prop-types';

import {Carousel as ResponsiveCarousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {Icon, SocialIconsBar} from '@app/components';
import {getClassName} from '@util/helpers';
import {APP_ICON} from '@util/constants';

import style from './Carousel.scss';

export const Carousel = ({slides}) => {
	const renderArrowPrev = (clickHandler, hasPrev) => {
		if (!hasPrev) return <></>;

		return <SliderButton onClick={clickHandler} leftSide />;
	};

	const renderArrowNext = (clickHandler, hasNext) => {
		if (!hasNext) return <></>;

		return <SliderButton onClick={clickHandler} />;
	};

	return (
		<ResponsiveCarousel
			showThumbs={false}
			showStatus={false}
			showArrows
			useKeyboardArrows
			renderArrowNext={renderArrowNext}
			renderArrowPrev={renderArrowPrev}
			infiniteLoop
		>
			{slides.map((slide, index) => {
				return (
					<div key={`slide-${index}`} className={style.slide}>
						<div className={style.header}>
							<img
								src={require('@assets/images/review-avatar.png')}
								alt='Avatar'
								className={style.avatar}
							/>
							<div className={style.info}>
								<h3 className={style.name}>{slide.name}</h3>
								<p className={style.jobTitle}>{slide.jobTitle}</p>
							</div>
							<SocialIconsBar className={style.socialIconsBar} />
						</div>
						<p className={style.body}>{slide.comment}</p>
					</div>
				);
			})}
		</ResponsiveCarousel>
	);
};

Carousel.propTypes = {
	slides: PropTypes.array.isRequired,
};

const SliderButton = ({onClick, leftSide = false}) => {
	return (
		<div className={getClassName(style.button, leftSide && style.button_left)} onClick={onClick}>
			<Icon className={getClassName(leftSide && style.leftSide)} name={APP_ICON.rightArrowWhite} />
		</div>
	);
};
