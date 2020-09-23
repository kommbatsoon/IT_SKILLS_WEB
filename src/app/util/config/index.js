import {TEXT_CONFIG} from '@util/config/text.config';
import {ROUTER_CONFIG} from '@util/config/router.config';
import {APP_ICON, COURSE_ENUM, FORM_FIELD_ENUM} from '@util/constants';

export const GLOBAL_CONFIG = {
	navigation: {
		main: 'Главная',
		trialLessons: 'Пробные занятия',
		courses: 'Курсы',
		coaches: 'Преподаватели',
		contacts: 'Контакты',
	},
	course: {
		frontend: 'Web-разработка',
		ios: 'Разработка под iOS',
		webDesign: 'Web-дизайн',
		android: 'Android-разработка',
	},
	mainPage: {
		topSection: {
			title: 'Научим разрабатывать с нуля за 6 месяцев',
		},
		coursesSection: {
			items: [
				{
					iconName: APP_ICON.apple,
					title: 'iOS-разработка',
					description: 'Научим разработке мобильных приложение на Swift',
					path: ROUTER_CONFIG.COURSES.IOS,
				},
				{
					iconName: APP_ICON.android,
					title: 'Android-разработка',
					description: 'Научим разрабатывать приложения для Android',
					path: ROUTER_CONFIG.COURSES.ANDROID,
				},
				{
					iconName: APP_ICON.webDev,
					title: 'Web-разработка',
					description: 'Научим создавать сайты, используя HTML, CSS, JS, React и многое другое',
					path: ROUTER_CONFIG.COURSES.FRONTEND,
				},
				{
					iconName: APP_ICON.webDesign,
					title: 'WEB-ДИЗАЙН',
					description: 'Научим создавать современный стильный дизайн для любых сайтов',
					path: ROUTER_CONFIG.COURSES.WEB_DESIGN,
				},
			],
		},
		perspectivesSection: {
			title: TEXT_CONFIG.sectionTitle.whatPerspective,
			items: [
				{
					title: 'Высокооплачиваемая профессия',
					description:
						'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
				},
				{
					title: 'Комфортное рабочее место',
					description:
						'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
				},
				{
					title: 'Постоянный карьерный рост и развитие',
					description:
						'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
				},
				{
					title: 'Удобный график работы',
					description:
						'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
				},
				{
					title: 'Востребованность',
					description:
						'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
				},
			],
		},
		advantagesSection: {
			title: TEXT_CONFIG.sectionTitle.advantages,
			items: [
				{
					icon: APP_ICON.practice,
					title: 'Упор на практику',
					description:
						'Наши преподаватели — практикующие специалисты, а не просто теоретики. Прямо сейчас они работают над настоящими проектами в компаниях или на фрилансе',
				},
				{
					icon: APP_ICON.support,
					title: 'Постоянная поддержка и помощь',
					description:
						'Живое общение с преподавателями на занятиях и в чате, а также с другими учениками в мессенджерах для обсуждения заданий и обмена опытом',
				},
				{
					icon: APP_ICON.work,
					title: 'Работа на реальных проектах',
					description:
						'Дипломная работа по заданию от реальных заказчиков позволяет применить полученные навыки, а также станет первым большим приложением в личном портфолио',
				},
				{
					icon: APP_ICON.blank,
					title: 'Трудоустройство и стажировки',
					description:
						'Наши курсы дают возможность с нуля освоить востребованную профессию и получить рекомендации по трудоустройству. Лучшие выпускники получают предложения по стажировке от наших компаний-партнёров',
				},
			],
		},
		enrollmentFormSection: {
			title: 'Стань востребованным IT специалистом',
			description:
				'Оставьте ваш номер телефона и мы проконсультируем вас по любому вопросу обучения и сотрудничества',
			buttonText: 'Получить консультацию',
			fields: [FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.PHONE],
		},
	},
	coursesPage: {
		topSection: {
			title: 'Каталог курсов',
		},
		coursesSection: {
			items: [
				{
					iconName: APP_ICON.apple,
					title: 'iOS-разработка',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.COURSES.IOS,
				},
				{
					iconName: APP_ICON.android,
					title: 'Android-разработка',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.COURSES.ANDROID,
				},
				{
					iconName: APP_ICON.webDev,
					title: 'Web-разработка',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.COURSES.FRONTEND,
				},
				{
					iconName: APP_ICON.webDesign,
					title: 'WEB-ДИЗАЙН',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.COURSES.WEB_DESIGN,
				},
			],
		},
		enrollmentFormSection: {
			title: 'Нужна помощь с курсом?',
			description: 'Оставь телефон в форме ниже и мы проконсультируем тебя в ближайшее время',
			buttonText: 'Получить консультацию',
			fields: [FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.EMAIL, FORM_FIELD_ENUM.PHONE],
		},
	},
	trialLessonsPage: {
		topSection: {
			title: 'Бесплатные пробные занятия',
		},
		coursesSection: {
			items: [
				{
					iconName: APP_ICON.apple,
					title: 'iOS-разработка',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.TRIAL_LESSON.IOS,
				},
				{
					iconName: APP_ICON.android,
					title: 'Android-разработка',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.TRIAL_LESSON.ANDROID,
				},
				{
					iconName: APP_ICON.webDev,
					title: 'Web-разработка',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.TRIAL_LESSON.FRONTEND,
				},
				{
					iconName: APP_ICON.webDesign,
					title: 'WEB-ДИЗАЙН',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.TRIAL_LESSON.WEB_DESIGN,
				},
			],
		},
		enrollmentFormSection: {
			title: 'Мы всегда на связи',
			description:
				'Если у вас еть вопросы о формате или вы не знаете что выбрать, оставьте номер — мы позвоним и ответим на все ваши вопросы',
			buttonText: 'Получить консультацию',
			fields: [FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.PHONE],
		},
	},
	trialLessonPage: {
		[COURSE_ENUM.IOS]: {
			course: COURSE_ENUM.IOS,
			topSection: {
				date: '25 мая в 19:00',
				title: 'по iOS-разработке',
			},
			howToGetSection: {
				title: TEXT_CONFIG.sectionTitle.howToGet,
				items: [
					{
						icon: APP_ICON.signUp,
						title: '1. Регистрируйся',
						description: 'Заполни контактную информацию в форме регистрации',
					},
					{
						icon: APP_ICON.consult,
						title: '2. Мы позвоним',
						description: 'Заполни контактную информацию в форме регистрации',
					},
					{
						icon: APP_ICON.calendar,
						title: '3. Напомним',
						description: 'Заполни контактную информацию в форме регистрации',
					},
					{
						icon: APP_ICON.door,
						title: '4. Присоединяйся',
						description: 'Заполни контактную информацию в форме регистрации',
					},
				],
			},
			lessonProgramSection: {
				title: TEXT_CONFIG.sectionTitle.lessonProgram,
				items: [
					{
						title: '1. перспективы ios-разработки',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
					{
						title: '2. язык swift',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
					{
						title: '3. как проходит обучение',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
					{
						title: '4. первая практика',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
					{
						title: '5. живое общение',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
				],
			},
			whoInterestedSection: {
				title: TEXT_CONFIG.sectionTitle.whoInterested,
				items: [
					{
						icon: APP_ICON.apple,
						title: 'Начинающим iOS-разработчикам',
					},
					{
						icon: APP_ICON.webDev,
						title: 'Новичкам в программировании',
					},
					{
						icon: APP_ICON.swift,
						title: 'Желающим освоить новый язык программирования',
					},
				],
			},
			developerCardSection: {
				title: 'КТО ТАКОЙ iOS-РАЗРАБОТЧИК?',
				description1:
					'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
					'и обновлений для устройств, созданных под брендом Apple:\n' +
					'iPad, iPod, iPhone, наручные часы Watch.',
				description2:
					'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift,' +
					'популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter,' +
					'средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, а с опытом достигает 300 тысяч рублей в месяц',
			},
			enrollmentFormSection: {
				title: 'регистрируйся',
				description: 'На бесплатное пробное занятие по курсу iOS-разработка',
				buttonText: 'Записаться',
				fields: [FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.EMAIL, FORM_FIELD_ENUM.PHONE],
			},
			coachSection: {
				title: TEXT_CONFIG.sectionTitle.speaker,
			},
		},
		[COURSE_ENUM.FRONTEND]: {
			course: COURSE_ENUM.FRONTEND,
			topSection: {
				date: '25 мая в 19:00',
				title: 'по iOS-разработке',
			},
			howToGetSection: {
				title: TEXT_CONFIG.sectionTitle.howToGet,
				items: [
					{
						icon: APP_ICON.signUp,
						title: '1. Регистрируйся',
						description: 'Заполни контактную информацию в форме регистрации',
					},
					{
						icon: APP_ICON.consult,
						title: '2. Мы позвоним',
						description: 'Заполни контактную информацию в форме регистрации',
					},
					{
						icon: APP_ICON.calendar,
						title: '3. Напомним',
						description: 'Заполни контактную информацию в форме регистрации',
					},
					{
						icon: APP_ICON.door,
						title: '4. Присоединяйся',
						description: 'Заполни контактную информацию в форме регистрации',
					},
				],
			},
			lessonProgramSection: {
				title: TEXT_CONFIG.sectionTitle.lessonProgram,
				items: [
					{
						title: '1. перспективы ios-разработки',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
					{
						title: '2. язык swift',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
					{
						title: '3. как проходит обучение',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
					{
						title: '4. первая практика',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
					{
						title: '5. живое общение',
						description:
							'Почему создание мобильных приложений для устройств Apple так востребовано, какие тренды на рынке труда и в области iOS-разработки',
					},
				],
			},
			whoInterestedSection: {
				title: TEXT_CONFIG.sectionTitle.whoInterested,
				items: [
					{
						icon: APP_ICON.apple,
						title: 'Начинающим iOS-разработчикам',
					},
					{
						icon: APP_ICON.webDev,
						title: 'Новичкам в программировании',
					},
					{
						icon: APP_ICON.swift,
						title: 'Желающим освоить новый язык программирования',
					},
				],
			},
			developerCardSection: {
				title: 'КТО ТАКОЙ iOS-РАЗРАБОТЧИК?',
				description1:
					'IOS-разработчик занимается созданием приложений, интерфейсов \n' +
					'и обновлений для устройств, созданных под брендом Apple:\n' +
					'iPad, iPod, iPhone, наручные часы Watch.',
				description2:
					'На курсы вы изучите основной инструмент IOS-разработчика — язык программирования Swift,' +
					'популярный и активно развивающийся язык разработки мобильных приложений. По данным HeadHunter,' +
					'средняя зарплата разработчиков iOS-приложений — 130-140 тысяч рублей, а с опытом достигает 300 тысяч рублей в месяц',
			},
			enrollmentFormSection: {
				title: 'регистрируйся',
				description: 'На бесплатное пробное занятие по курсу iOS-разработка',
				buttonText: 'Записаться',
				fields: [FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.EMAIL, FORM_FIELD_ENUM.PHONE],
			},
			coachSection: {
				title: TEXT_CONFIG.sectionTitle.speaker,
			},
		},
	},
	coursePage: {
		[COURSE_ENUM.IOS]: {
			course: COURSE_ENUM.IOS,
			topSection: {
				date: '25 мая в 19:00',
				title: 'по iOS-разработке',
				description: 'Научим с нуля HTML, CSS и JavaScript',
				period: 'за 6 месяцев',
			},
			advantagesSection: {
				items: [
					{
						icon: APP_ICON.dollar,
						title: 'Удобный формат оплаты',
						description:
							'Оплата в рассрочку или вся стоимость курса сразу, со скидкой 15%. Выбирайте как вам удобнее',
					},
					{
						icon: APP_ICON.blank,
						title: 'Трудоустройство и стажировки',
						description: 'Лучшие выпускники получают предложения по стажировке от наших компаний-партнёров',
					},
					{
						icon: APP_ICON.practice,
						title: 'Основной упор на практику',
						description: 'Наши преподаватели — практикующие специалисты, а не просто теоретики.',
					},
					{
						icon: APP_ICON.support,
						title: 'Постоянная поддержка',
						description: 'Живое общение с преподавателями на занятиях и в чате.',
					},
				],
			},
			howGoesSection: {
				title: TEXT_CONFIG.sectionTitle.howOnlineTrainingGoes,
				items: [
					{
						icon: APP_ICON.conference,
						title: 'Конференция в skype',
						description:
							'В установленное время группа подключается к конференции в Skype, созданной преподавателем, для проведения занятия. В зависимости от темы занятия будут длиться от 30 минут до 1,5 часа 3 раза в неделю. В течение занятия вы можете задавать свои вопросы и общаться',
					},
					{
						icon: APP_ICON.home,
						title: 'Домашние задания',
						description:
							'После каждого занятия вы будете получать задание, которое нужно обязательно выполнить. Систематическое невыполнение домашних заданий может привести к тому, что вы вылетите из курса',
					},
					{
						icon: APP_ICON.message,
						title: 'общение с группой и преподавателем',
						description:
							'На протяжении всего курса вы будете состоять в чате с другими учениками, где сможете обсуждать, созваниваться и помогать друг другу. В чате будет и преподаватель, которому также можно задавать вопросы и общаться',
					},
					{
						icon: APP_ICON.diploma,
						title: 'дипломный проект',
						description:
							'В конце курса вы напишите свой собственный проект, который будет первым полноценным приложением в вашем портфолио',
					},
				],
			},
			learnOnCourseSection: {
				title: TEXT_CONFIG.sectionTitle.learnOnCourse,
				items: [
					'Работать с iTunes Connect',
					'Разбираться в чужом коде',
					'Ставить и соблюдать сроки',
					'Программировать анимации',
					'Работать с реактивными библиотеками',
					'Работать с многопоточностью в приложениях',
					'Работать с API, в том числе социальных сетей',
					'Создавать мобильные приложения по гайдлайнам iOS',
					'Получишь опыт проектирования клиент-серверных приложений',
					'Привыкнешь писать комментируемый и строго форматированный код',
				],
			},
			coachSection: {
				title: TEXT_CONFIG.sectionTitle.coachOfCourse,
			},
			enrollmentFormSection: {
				title: 'Остались вопросы?',
				description:
					'Оставь свой номер телефона в форме и мы перезвоним чтобы проконсультировать по всем интересующим вопросам',
				buttonText: 'Записаться',
				fields: [FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.EMAIL, FORM_FIELD_ENUM.PHONE],
			},
		},
		[COURSE_ENUM.FRONTEND]: {
			course: COURSE_ENUM.FRONTEND,
			topSection: {
				date: '25 мая в 19:00',
				title: 'по iOS-разработке',
				description: 'Научим с нуля HTML, CSS и JavaScript',
				period: 'за 6 месяцев',
			},
			advantagesSection: {
				items: [
					{
						icon: APP_ICON.dollar,
						title: 'Удобный формат оплаты',
						description:
							'Оплата в рассрочку или вся стоимость курса сразу, со скидкой 15%. Выбирайте как вам удобнее',
					},
					{
						icon: APP_ICON.blank,
						title: 'Трудоустройство и стажировки',
						description: 'Лучшие выпускники получают предложения по стажировке от наших компаний-партнёров',
					},
					{
						icon: APP_ICON.practice,
						title: 'Основной упор на практику',
						description: 'Наши преподаватели — практикующие специалисты, а не просто теоретики.',
					},
					{
						icon: APP_ICON.support,
						title: 'Постоянная поддержка',
						description: 'Живое общение с преподавателями на занятиях и в чате.',
					},
				],
			},
			howGoesSection: {
				title: TEXT_CONFIG.sectionTitle.howOnlineTrainingGoes,
				items: [
					{
						icon: APP_ICON.conference,
						title: 'Конференция в skype',
						description:
							'В установленное время группа подключается к конференции в Skype, созданной преподавателем, для проведения занятия. В зависимости от темы занятия будут длиться от 30 минут до 1,5 часа 3 раза в неделю. В течение занятия вы можете задавать свои вопросы и общаться',
					},
					{
						icon: APP_ICON.home,
						title: 'Домашние задания',
						description:
							'После каждого занятия вы будете получать задание, которое нужно обязательно выполнить. Систематическое невыполнение домашних заданий может привести к тому, что вы вылетите из курса',
					},
					{
						icon: APP_ICON.message,
						title: 'общение с группой и преподавателем',
						description:
							'На протяжении всего курса вы будете состоять в чате с другими учениками, где сможете обсуждать, созваниваться и помогать друг другу. В чате будет и преподаватель, которому также можно задавать вопросы и общаться',
					},
					{
						icon: APP_ICON.diploma,
						title: 'дипломный проект',
						description:
							'В конце курса вы напишите свой собственный проект, который будет первым полноценным приложением в вашем портфолио',
					},
				],
			},
			learnOnCourseSection: {
				title: TEXT_CONFIG.sectionTitle.learnOnCourse,
				items: [
					'Работать с iTunes Connect',
					'Разбираться в чужом коде',
					'Ставить и соблюдать сроки',
					'Программировать анимации',
					'Работать с реактивными библиотеками',
					'Работать с многопоточностью в приложениях',
					'Работать с API, в том числе социальных сетей',
					'Создавать мобильные приложения по гайдлайнам iOS',
					'Получишь опыт проектирования клиент-серверных приложений',
					'Привыкнешь писать комментируемый и строго форматированный код',
				],
			},
			coachSection: {
				title: TEXT_CONFIG.sectionTitle.coachOfCourse,
			},
			enrollmentFormSection: {
				title: 'Остались вопросы?',
				description:
					'Оставь свой номер телефона в форме и мы перезвоним чтобы проконсультировать по всем интересующим вопросам',
				buttonText: 'Записаться',
				fields: [FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.EMAIL, FORM_FIELD_ENUM.PHONE],
			},
		},
	},
	contactsPage: {
		topSection: {
			title: 'Контакты',
		},
		infoSection: {
			title: TEXT_CONFIG.writeToUs,
			items: [
				'У вас есть вопросы по обучению',
				'Нужна помощь по использованию сайта',
				'Хотите зарегистрироваться на курс',
				'Есть идеи по улучшению проекта',
				'Хотите предложить сотрудничество',
				'Вы нашли проблему или ошибку',
			],
		},
		enrollmentFormSection: {
			title: 'Мы всегда на связи',
			description: 'Напишите ваш вопрос в форме ниже и мы проконсультируем вас в ближайшее время',
			buttonText: 'Отправить',
			fields: [FORM_FIELD_ENUM.NAME, FORM_FIELD_ENUM.EMAIL, FORM_FIELD_ENUM.PHONE, FORM_FIELD_ENUM.QUESTION],
		},
	},
	courseTopSection: {
		[COURSE_ENUM.IOS]: {
			date: '25 мая в 19:00',
			title: 'по iOS-разработке',
			description: 'Научим с нуля HTML, CSS и JavaScript',
			period: 'за 6 месяцев',
		},
		[COURSE_ENUM.FRONTEND]: {
			date: '25 мая в 19:00',
			title: 'по FRONTEND-разработке',
			description: 'Научим с нуля HTML, CSS и JavaScript',
			period: 'за 6 месяцев',
		},
		[COURSE_ENUM.WEB_DESIGN]: {
			date: '25 мая в 19:00',
			title: 'по WEB-дизайну',
			description: 'Научим с нуля HTML, CSS и JavaScript',
			period: 'за 6 месяцев',
		},
		[COURSE_ENUM.ANDROID]: {
			date: '25 мая в 19:00',
			title: 'по ANDROID-разработке',
			description: 'Научим с нуля HTML, CSS и JavaScript',
			period: 'за 6 месяцев',
		},
	},
	reviewsSection: {
		title: TEXT_CONFIG.sectionTitle.reviews,
		items: [
			{
				avatar: 'review-avatar.png',
				name: 'Кирилл',
				jobTitle: 'AEM Java Developer - Axamit',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/'},
					{icon: APP_ICON.fbWhite, link: 'https://www.facebook.com/'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/'},
				],
				comment:
					'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
			},
			{
				avatar: 'review-avatar.png',
				name: 'Виктор Блуд',
				jobTitle: 'AEM Java Developer - Axamit',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/'},
					{icon: APP_ICON.fbWhite, link: 'https://www.facebook.com/'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/'},
				],
				comment:
					'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
			},
			{
				avatar: 'review-avatar.png',
				name: 'Денис Семенихин',
				jobTitle: 'AEM Java Developer - Axamit',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/'},
					{icon: APP_ICON.fbWhite, link: 'https://www.facebook.com/'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/'},
				],
				comment:
					'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
			},
			{
				avatar: 'review-avatar.png',
				name: 'Кирилл',
				jobTitle: 'AEM Java Developer - Axamit',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/'},
					{icon: APP_ICON.fbWhite, link: 'https://www.facebook.com/'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/'},
				],
				comment:
					'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
			},
			{
				avatar: 'review-avatar.png',
				name: 'Виктор Блуд',
				jobTitle: 'AEM Java Developer - Axamit',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/'},
					{icon: APP_ICON.fbWhite, link: 'https://www.facebook.com/'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/'},
				],
				comment:
					'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
			},
			{
				avatar: 'ios-card.png',
				name: 'Денис Семенихин',
				jobTitle: 'AEM Java Developer - Axamit',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/'},
					{icon: APP_ICON.fbWhite, link: 'https://www.facebook.com/'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/'},
				],
				comment:
					'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
			},
		],
	},
	footer: {
		columnTitle: {
			main: 'Основное',
			courses: 'Курсы',
			support: 'Поддержка',
		},
	},
	contacts: {
		email: 'info@it-skills.pro',
		phone: '+375 29 264 05 18',
		socialMedia: [
			{icon: APP_ICON.vkWhite, link: 'https://vk.com/'},
			{icon: APP_ICON.fbWhite, link: 'https://www.facebook.com/'},
			{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/'},
		],
	},
	form: {
		validation: {
			required: 'Это обязательное поле',
		},
		field: {
			name: {
				key: 'name',
				label: 'Имя и Фамилия',
				placeholder: 'Иван Иванов',
			},
			email: {
				key: 'email',
				label: 'Email',
				placeholder: 'emaill@gmail.com',
			},
			phone: {
				key: 'phone',
				label: 'Номер телефона',
				placeholder: '+375 (',
			},
			question: {
				key: 'question',
				label: 'Ваш вопрос',
				placeholder: 'Напишите ваш вопрос',
			},
		},
	},
	errorPage: {
		404: {
			title: '404',
			description: 'Страница не найдена',
			buttonText: 'Вернуться на главную',
		},
	},
};
