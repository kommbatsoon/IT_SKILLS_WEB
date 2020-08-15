import React, {useEffect} from 'react';

import {EnrollmentForm} from '@app/components';
import {initialPageActions, removeWhiteSpaces} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {GLOBAL_CONFIG} from '@util/config';

import style from './ContactsPage.scss';

export const ContactsPage = ({config = GLOBAL_CONFIG.contactsPage}) => {
	useEffect(initialPageActions, []);

	return (
		<>
			<h2 className={style.title}>{config.topSection.title}</h2>
			<div className={style.flexContainer}>
				<div className={style.info}>
					<h3>{config.infoSection.title}:</h3>

					<ul className={style.points}>
						{config.infoSection.items?.map((point) => {
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
							<a className={style.gold} href={`mailto:${GLOBAL_CONFIG.contacts.email}`}>
								{GLOBAL_CONFIG.contacts.email}
							</a>
						</p>
						<p>
							{TEXT_CONFIG.phoneLabel}:{' '}
							<a className={style.gold} href={`tel:${removeWhiteSpaces(GLOBAL_CONFIG.contacts.phone)}`}>
								{GLOBAL_CONFIG.contacts.phone}
							</a>
						</p>
					</div>
				</div>
				<EnrollmentForm config={config.enrollmentFormSection} className={style.form} />
			</div>
		</>
	);
};
