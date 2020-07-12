import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {ArrowButton, Icon} from '@app/components';
import {getClassName} from '@util/helpers';
import {APP_ICON} from '@util/constants';

import style from './CardContainer.scss';

export const CardContainer = ({className, children, withShadowOnHover = false, withHeadLine = false}) => {
	const [isHovered, setHovered] = useState(() => false);

	return (
		<div
			className={getClassName(
				style.card,
				withShadowOnHover && style.shadowOnHover,
				!withShadowOnHover && withHeadLine && style.headLine,
				withShadowOnHover && withHeadLine && style.headLineOnHover,
				className,
			)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{children}

			<div className={style.emptyBlock} />

			{!isHovered && <FakeButton />}
			{isHovered && <ArrowButton />}
		</div>
	);
};

CardContainer.propTypes = {
	children: PropTypes.element,
	className: PropTypes.string,
	withShadowOnHover: PropTypes.bool,
	withHeadLine: PropTypes.bool,
};

const FakeButton = () => {
	return (
		<div className={style.fakeButton}>
			<Icon name={APP_ICON.rightArrowWhite} />
		</div>
	);
};
