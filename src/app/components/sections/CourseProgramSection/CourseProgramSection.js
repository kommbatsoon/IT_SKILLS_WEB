import React from 'react';

import {Button, SectionContainer} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {COURSE_ENUM} from '@util/constants';

import style from './CourseProgramSection.scss';

const PROGRAM_CONFIG = {
	[COURSE_ENUM.IOS]: {
		topics: [
			{
				title: 'Введение. Знакомство с XCode',
				paragraphs: ['Xcode - основная среда разработки', 'Симуляторы и Playground', 'Настройка проекта'],
			},
			{
				title: 'Репозитории',
				paragraphs: ['Git', 'Git Flow', 'Работа с командами Git', 'Github'],
			},
			{
				title: 'Встроенные функции и модули',
				paragraphs: [
					'Функции для обработки и анализа данных',
					'Использование модулей',
					'Работа с датой и временем – Random',
				],
			},
			{
				title: 'Введение. Знакомство с XCode',
				paragraphs: ['Xcode - основная среда разработки', 'Симуляторы и Playground', 'Настройка проекта'],
			},
			{
				title: 'Репозитории',
				paragraphs: ['Git', 'Git Flow', 'Работа с командами Git', 'Github'],
			},
			{
				title: 'Встроенные функции и модули',
				paragraphs: [
					'Функции для обработки и анализа данных',
					'Использование модулей',
					'Работа с датой и временем – Random',
				],
			},
			{
				title: 'Введение. Знакомство с XCode',
				paragraphs: ['Xcode - основная среда разработки', 'Симуляторы и Playground', 'Настройка проекта'],
			},
			{
				title: 'Репозитории',
				paragraphs: ['Git', 'Git Flow', 'Работа с командами Git', 'Github'],
			},
			{
				title: 'Встроенные функции и модули',
				paragraphs: [
					'Функции для обработки и анализа данных',
					'Использование модулей',
					'Работа с датой и временем – Random',
				],
			},
		],
	},
};

export const CourseProgramSection = ({type = COURSE_ENUM.IOS, className}) => {
	const config = PROGRAM_CONFIG[type];
	const handleSignUpClick = () => console.log('Записаться на курс: ', config);

	return (
		<SectionContainer
			title={TEXT_CONFIG.sectionTitle.courseProgram}
			className={getClassName(style.wrapper, className)}
			withContainerWidth
		>
			<div className={style.topicGrid}>
				{config.topics.map((topic, topicIndex) => {
					return (
						<div key={`topic-${topicIndex}`} className={style.topic}>
							<div className={style.line} />
							<h4 className={style.title}>
								{topicIndex + 1}. {topic.title}
							</h4>

							{topic.paragraphs.map((paragraph, paragraphIndex) => {
								return (
									<p key={`paragraph-${paragraphIndex}`} className={style.paragraph}>
										<span className={style.gold}>—</span>
										{paragraph}
									</p>
								);
							})}
						</div>
					);
				})}
			</div>

			<Button className={style.button} onClick={handleSignUpClick} withArrow={false}>
				{TEXT_CONFIG.seeFullProgram}
			</Button>
		</SectionContainer>
	);
};
