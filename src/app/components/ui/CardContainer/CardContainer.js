import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

import {ArrowButton, Icon} from '@app/components';
import {getClassName} from '@util/helpers';
import {APP_ICON} from '@util/constants';

import style from './CardContainer.scss';

export const CardContainer = (props) => {
	const {
		className,
		children,
		card,
		isActive = false,
		withShadowOnHover = false,
		withHeadLine = false,
		ButtonProps,
	} = props;

	const [isHovered, setHovered] = useState(() => isActive);

	return (
		<div
			className={getClassName(
				style.card,
				!isActive && withShadowOnHover && style.shadowOnHover,
				(isActive || (!withShadowOnHover && withHeadLine)) && style.headLine,
				!isActive && withShadowOnHover && withHeadLine && style.headLineOnHover,
				className,
			)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{children}

			{card?.image && React.cloneElement(card.image, {active: isHovered})}

			{!isEmpty(ButtonProps) && (
				<>
					<div className={style.emptyBlock} />

					{!isHovered && <FakeButton />}
					{isHovered && (
						<ArrowButton onClick={() => ButtonProps.onClick(card)}>{ButtonProps.text}</ArrowButton>
					)}
				</>
			)}
		</div>
	);
};

export const CardContainerPropTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	className: PropTypes.string,
	isActive: PropTypes.bool,
	withShadowOnHover: PropTypes.bool,
	withHeadLine: PropTypes.bool,
	card: PropTypes.shape({
		iconName: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
	}),
	ButtonProps: PropTypes.shape({
		text: PropTypes.string,
		onClick: PropTypes.func,
	}),
};

CardContainer.propTypes = CardContainerPropTypes;

const FakeButton = () => {
	return (
		<div className={style.fakeButton}>
			<Icon name={APP_ICON.rightArrowWhite} />
		</div>
	);
};
