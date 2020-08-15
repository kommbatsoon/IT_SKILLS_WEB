import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

import {ArrowButton, Button, Icon} from '@app/components';
import {getClassName} from '@util/helpers';
import {APP_ICON} from '@util/constants';
import {Screen} from '@util/srceen';

import style from './CardContainer.scss';

export const CardContainer = (props) => {
	const {
		id,
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
			id={id}
			className={getClassName(
				style.card,
				!isActive && withShadowOnHover && style.shadowOnHover,
				((!Screen.isMobile && isActive) || (!withShadowOnHover && withHeadLine)) && style.headLine,
				!isActive && withShadowOnHover && withHeadLine && style.headLineOnHover,
				className,
			)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{!Screen.isDesktop && card?.image && React.cloneElement(card.image, {active: isHovered})}

			{children}

			{Screen.isDesktop && card?.image && React.cloneElement(card.image, {active: isHovered})}

			{!isEmpty(ButtonProps) && (
				<>
					<div className={style.emptyBlock} />

					{Screen.isDesktop && !isHovered && <FakeButton />}
					{Screen.isDesktop && isHovered && (
						<ArrowButton onClick={() => ButtonProps.onClick(card)}>{ButtonProps.text}</ArrowButton>
					)}

					{!Screen.isDesktop && (
						<Button className={style.button} onClick={() => ButtonProps.onClick(card)}>
							{ButtonProps.text}
						</Button>
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
