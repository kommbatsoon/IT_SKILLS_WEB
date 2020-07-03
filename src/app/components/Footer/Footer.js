import React from 'react';
import {Link} from 'react-router-dom';

import style from './Footer.scss';

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<Link to='/' className={style.logo}>
				IT-SKILLS.PRO
			</Link>
		</footer>
	);
};
