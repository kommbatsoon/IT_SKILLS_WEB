import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@app/components';
import {getClassName} from '@util/helpers';

import style from './SocialIcons.scss';

export const SocialIcons = (props) => {
	const {classes, icons = []} = props;

	return (
		<div className={getClassName(style.socialIcons, classes.root)}>
			{icons.map(({icon, link}, key) => {
				return (
					<a key={`icon-${key}`} href={link} target='_blank' rel='noreferrer'>
						<Icon name={icon} className={getClassName(classes.icon)} />
					</a>
				);
			})}
		</div>
	);
};

SocialIcons.propTypes = {
	icons: PropTypes.array.isRequired,
	classes: PropTypes.shape({
		root: PropTypes.string,
		icon: PropTypes.string,
	}),
};
