import React from 'react';

import {EnrollmentForm} from '@app/components';
import {FORM_CONFIG, TEXT_CONFIG} from '@util/config/text.config';

import style from './ContactsPage.scss';

const CONTACTS = {
	email: 'info@it-skills.pro',
	phone: '+375 29 264 05 18',
};

export const ContactsPage = () => {
	return (
		<div className='page-wrapper'>
			<h2 className={style.title}>{TEXT_CONFIG.navigation.contacts}</h2>
			<div className={style.flexContainer}>
				<div>
					<h3>{TEXT_CONFIG.writeToUs}:</h3>

					<ul className={style.points}>
						{TEXT_CONFIG.contactPoints?.map((point) => {
							return (
								<p className={style.point} key={point}>
									{point}
								</p>
							);
						})}
					</ul>

					<h3>{TEXT_CONFIG.ourContacts}:</h3>
					<div className={style.contacts}>
						<p className={style.gold}>{TEXT_CONFIG.ourSupportChat}</p>
						<p>
							{TEXT_CONFIG.emailLabel}:{' '}
							<a className={style.gold} href={`mailto:${CONTACTS.email}`}>
								{CONTACTS.email}
							</a>
						</p>
						<p>
							{TEXT_CONFIG.phoneLabel}:{' '}
							<a className={style.gold} href={`tel:${CONTACTS.phone.replace(/ /g, '')}`}>
								{CONTACTS.phone}
							</a>
						</p>
					</div>
				</div>
				<EnrollmentForm config={FORM_CONFIG.contactsPage} />
			</div>
		</div>
	);
};
