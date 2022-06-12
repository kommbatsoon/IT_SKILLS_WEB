import React from 'react';
import PropTypes from 'prop-types';

import {getClassName} from '@util/helpers';
import {COURSE_ENUM} from '@util/constants';
import {AndroidIcon, WebDevIcon, WebDesignIcon, AppleIcon} from '@assets/images';

export const CourseImage = ({course = COURSE_ENUM.IOS, classes}) => {
	switch (course) {
		case COURSE_ENUM.IOS: {
			return <img src={AppleIcon} alt='Image' className={getClassName(classes.root, classes.ios)} />;
		}
		case COURSE_ENUM.FRONTEND: {
			return <img src={WebDevIcon} alt='Image' className={getClassName(classes.root, classes.frontend)} />;
		}
		case COURSE_ENUM.WEB_DESIGN: {
			return <img src={WebDesignIcon} alt='Image' className={getClassName(classes.root, classes.webDesign)} />;
		}
		case COURSE_ENUM.ANDROID: {
			return <img src={AndroidIcon} alt='Image' className={getClassName(classes.root, classes.android)} />;
		}
	}
};

CourseImage.propTypes = {
	course: PropTypes.string,
	classes: PropTypes.shape({
		root: PropTypes.string,
		ios: PropTypes.string,
		frontend: PropTypes.string,
		webDesign: PropTypes.string,
		android: PropTypes.string,
	}),
};
