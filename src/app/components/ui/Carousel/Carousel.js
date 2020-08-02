import React from 'react';
import PropTypes from 'prop-types';

import {Carousel as ResponsiveCarousel} from 'react-responsive-carousel';
import {SlideButton, SocialIcons} from '@app/components';

import './Carousel.lib.scss';
import style from './Carousel.scss';

export const Carousel = ({slides}) => {
	const renderArrowPrev = (clickHandler, hasPrev) => {
		if (!hasPrev) return <></>;

		return <SlideButton onClick={clickHandler} wrapperClassName={style.button_left} leftSide />;
	};

	const renderArrowNext = (clickHandler, hasNext) => {
		if (!hasNext) return <></>;

		return <SlideButton onClick={clickHandler} wrapperClassName={style.button} />;
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
							<SocialIcons classes={{root: style.socialIcons}} icons={slide.socialMedia} />
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
