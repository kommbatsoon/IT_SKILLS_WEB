import React, {useState} from 'react';

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
	[COURSE_ENUM.FRONTEND]: {
		topics: [
			{
				title: 'Введение. HTML',
				paragraphs: ['Понятие сайта, веб-приложения', 'Базовая структура документа', 'Понятие тэга'],
			},
			{
				title: 'Основные HTML элементы и их атрибуты',
				paragraphs: ['Текст, Списки', 'Таблицы', 'Формы'],
			},
			{
				title: 'Продвинутый HTML',
				paragraphs: ['Формы, типы полей ввода', 'Полезные тэги, семантика', 'Iframe, SVG, Canvas'],
			},
			{
				title: 'Изображения, видео. Введение в CSS',
				paragraphs: ['Изображения, форматы', 'Видео', 'Введение в CSS'],
			},
			{
				title: 'Основы CSS',
				paragraphs: ['Подключение CSS к HTML', 'Селекторы', 'Основные свойства'],
			},
			{
				title: 'Шрифты, размеры, границы',
				paragraphs: ['Единицы измерения', 'Форматирование текста', 'Цвет, границы, размеры'],
			},
			{
				title: 'Box model. CSS flexbox, grid',
				paragraphs: ['Понятие Box Model', 'CSS Flexbox', 'CSS Grid'],
			},
			{
				title: 'CSS анимации',
				paragraphs: ['Введение в анимации', 'Простые анимации', 'Продвинутые анимации'],
			},
			{
				title: 'Адаптивная и отзывчивая вёрстка',
				paragraphs: ['Медиазапросы', 'Адаптивная вёрстка', 'Мобильная верска, подходы'],
			},
			{
				title: 'Верстка макетов',
				paragraphs: [
					'Разбор макета',
					'Настройка окружения',
					'Блочная верстка, приёмы',
					'Сборка и оптимизация проекта',
				],
			},
			{
				title: 'Введение в JavaScript',
				paragraphs: ['Знакомство с языком программирования', 'Привет, мир!', 'Структура кода'],
			},
			{
				title: 'Основы JavaScript ч.1',
				paragraphs: ['Переменные', 'Типы данных', 'Преобразование типов', 'Alert, prompt, confirm'],
			},
			{
				title: 'Основы JavaScript ч.2',
				paragraphs: [
					'Базовые операторы, математика',
					'Операторы, типы операторов',
					'Конструкция "switch"',
					'Циклы',
				],
			},
			{
				title: 'Основы JavaScript ч.3',
				paragraphs: ['Функции', 'Функции-стрелки, основы', 'Function Expression', 'Особенности JavaScript'],
			},
			{
				title: 'Объекты',
				paragraphs: ['Объекты: основы', 'Методы объекта, "this"', 'Свойства - геттеры и сеттеры'],
			},
			{
				title: 'Типы данных',
				paragraphs: ['Методы у примитивов', 'Числа, строки', 'Массивы, методы массивов', 'Дата и время'],
			},
			{
				title: 'Взаимодействие с DOM ч.1',
				paragraphs: ['DOM-дерево', 'Навигация по DOM-элементам', 'Свойства узлов', 'Изменение документа'],
			},
			{
				title: 'Взаимодействие с DOM ч.2',
				paragraphs: ['Поиск: getElement*, querySelector*', 'Стили и классы', 'Размеры и прокрутка окна'],
			},
			{
				title: 'События',
				paragraphs: [
					'Введение в браузерные события',
					'Всплытие и погружение',
					'Действия браузера по умолчанию',
				],
			},
			{
				title: 'Интерфейсные события',
				paragraphs: ['Основы событий мыши', 'Клавиатура: keydown и keyup', 'События указателя, прокрутка'],
			},
			{
				title: 'Формы',
				paragraphs: [
					'Свойства и методы формы',
					'События элементов формы',
					'Отправка формы',
					'Интеграция с Telegram',
				],
			},
			{
				title: 'Продвинутая работа с функциями',
				paragraphs: ['Рекурсия и стек', 'Глобальный объект', 'SetTimeout и setInterval', 'Замыкание'],
			},
			{
				title: 'Классы',
				paragraphs: [
					'Класс: базовый синтаксис',
					'Наследование классов',
					'Статические свойства и методы',
					'Приватные и защищённые методы',
				],
			},
			{
				title: 'Обработка ошибок',
				paragraphs: ['Обработка ошибок, "try..catch"', 'Пользовательские ошибки, расширение Error'],
			},
			{
				title: 'Промисы, async/await',
				paragraphs: ['Введение: колбэки', 'Промисы, цепочка промисов', 'Async/await'],
			},
			{
				title: 'Взаимодействие с API',
				paragraphs: ['Fetch API', 'Запросы на другие сайты', 'Объекты URL', 'XMLHttpRequest'],
			},
			{
				title: 'Введение в ReactJS',
				paragraphs: ['Основы React', 'Создание скелетона', 'Компоненты'],
			},
		],
	},
};

const DISPLAYED_COUNT = 6;

export const CourseProgramSection = ({course = COURSE_ENUM.IOS, className}) => {
	const config = PROGRAM_CONFIG[course];

	const [isCollapsed, setCollapsed] = useState(true);

	const displayedTopics = isCollapsed ? config.topics.slice(0, DISPLAYED_COUNT) : config.topics;

	const handleShowMoreClick = () => {
		setCollapsed(!isCollapsed);
	};

	return (
		<SectionContainer
			title={TEXT_CONFIG.sectionTitle.courseProgram}
			className={getClassName(style.wrapper, className)}
			withContainerWidth
		>
			<div className={style.topicGrid}>
				{displayedTopics.map((topic, topicIndex) => {
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

			<Button className={style.button} onClick={handleShowMoreClick} withArrow={false}>
				{isCollapsed ? TEXT_CONFIG.seeFullProgram : TEXT_CONFIG.seeCollapsedProgram}
			</Button>
		</SectionContainer>
	);
};
