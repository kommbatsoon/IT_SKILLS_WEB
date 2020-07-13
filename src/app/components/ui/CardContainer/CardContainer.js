import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

import {ArrowButton, Icon} from '@app/components';
import {getClassName} from '@util/helpers';
import {APP_ICON} from '@util/constants';

import style from './CardContainer.scss';

export const CardContainer = (props) => {
	const {className, children, card, withShadowOnHover = false, withHeadLine = false, ButtonProps} = props;
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

			{!isEmpty(ButtonProps) && (
				<>
					<div className={style.emptyBlock} />

					{!isHovered && <FakeButton />}
					{isHovered && <ArrowButton text={ButtonProps.text} onClick={() => ButtonProps.onClick(card)} />}
				</>
			)}
		</div>
	);
};

CardContainer.propTypes = {
	children: PropTypes.element,
	className: PropTypes.string,
	withShadowOnHover: PropTypes.bool,
	withHeadLine: PropTypes.bool,
	card: PropTypes.shape({
		iconName: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
	}),
	ButtonProps: {
		text: PropTypes.string,
		onClick: PropTypes.func,
	},
};

const FakeButton = () => {
	return (
		<div className={style.fakeButton}>
			<Icon name={APP_ICON.rightArrowWhite} />
		</div>
	);
};
