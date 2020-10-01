export const TEXT_CONFIG = {
	sectionTitle: {
		howToGet: 'КАК ПОПАСТЬ НА ПРОБНОЕ ЗАНЯТИЕ',
		whoInterested: 'Кому будет интересно',
		lessonProgram: 'ПРОГРАММА ПРОБНОГО ЗАНЯТИЯ',
		howOnlineTrainingGoes: 'КАК ПРОХОДИТ ОНЛАЙН-ОБУЧЕНИЕ',
		learnOnCourse: 'научитесь на курсе',
		coachOfCourse: 'Преподаватель курса',
		speaker: 'Спикер',
		courseProgram: 'Программа курса',
	},
	currency: {
		BYN: 'BYN',
		RUB: 'RUB',
	},
	trialLessonButton: 'Пробное занятие',
	freeOnlineLesson: 'Бесплатное онлайн-занятие',
	copyright: '2020 ANKDESIGN',
	emailLabel: 'Email',
	phoneLabel: 'Телефон',
	whenLabel: 'Когда',
	courseLabel: 'Курс',
	registerLabel: 'Зарегестрироваться',
	signUpLabel: 'Записаться',
	ourSupportChat: 'Наш чат поддержки',
	ourContacts: 'Наши контакты',
	writeToUs: 'Пишите нам если',
	moreDetails: 'Подробнее',
	freeLabel: 'Бесплатно',
	groupStart: 'Старт группы',
	freePlaces: 'Свободные места',
	seeFullProgram: 'Посмотреть всю программу',
	seeCollapsedProgram: 'Свернуть программу',
	buyersChoice: 'Выбор учеников',
	successMessage: 'Заявка успешно отправлена!',
	paymentType: {
		full: {
			title: 'Оплата сразу',
			buttonText: 'Оплатить сразу',
		},
		partly: {
			title: 'В рассрочку',
			buttonText: 'Купить в рассрочку',
		},
	},
};

export const GLOBAL_CONFIG = {
	navigation: {
		main: 'Главная',
		trialLessons: 'Пробные занятия',
		courses: 'Курсы',
		coaches: 'Преподаватели',
		contacts: 'Контакты',
	},
	course: {
		frontend: 'Frontend-разработка',
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
					iconName: APP_ICON.webDev,
					title: 'Frontend-разработка',
					description: 'Научим создавать сайты, используя HTML, CSS, JS, React и многое другое',
					path: ROUTER_CONFIG.COURSES.FRONTEND,
				},
			],
		},
		perspectivesSection: {
			title: 'Какие перспективы?',
			items: [
				{
					title: 'Высокооплачиваемая профессия',
					description:
						'У начинающих IT-специалистов зарплата может быть от 300 до 600$. Через год-полтора при должном упорстве и стремлении ваша зарплата может дорасти до 1000-1200$. С опытом 4-5 лет можно получать 3000$ и больше',
				},
				{
					title: 'Востребованность',
					description:
						'IT-специалисты сегодня нужны всегда и везде. Став хорошим специалистом в своей нише, вы всегда будете очень востребованы.',
				},
				{
					title: 'Постоянный карьерный рост и развитие',
					description:
						'Если вы целеустремленный человек, то стремительный карьерный рост вам обеспечен.  Обучение английскому языку, посещение мастер-классов и конференций, оплата спортивных абонементов и многие другие развивающие мероприятия — это предоставляют и оплачивают многие IT-компании.',
				},
				{
					title: 'Удобный график работы',
					description:
						'В большинстве IT-компаний или веб-студий сотрудники приходят в офис в промежутке с 9 до 12 часов дня. Главное — качественно и своевременно выполнять работу, тогда ваши «опоздания» не будут раздражать руководителей.',
				},
				{
					title: 'Комфортное рабочее место',
					description:
						'Уютные и просторные офисы, переговорные, большие мониторы, компьютерные кресла, кресла-мешки и т.д. — все компании стремятся предоставить сотрудникам всевозможные удобства.',
				},
			],
		},
		advantagesSection: {
			title: 'Преимущества обучения',
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
					iconName: APP_ICON.webDev,
					title: 'Frontend-разработка',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.COURSES.FRONTEND,
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
					iconName: APP_ICON.webDev,
					title: 'Frontend-разработка',
					description: '19 марта в 19:00',
					path: ROUTER_CONFIG.TRIAL_LESSON.FRONTEND,
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
						description:
							'Наш менеджер вскоре свяжется, ответит и проконсультирует по всем вопросам и подтвердит регистрацию',
					},
					{
						icon: APP_ICON.calendar,
						title: '3. Напомним',
						description:
							'За несколько дней до начала занятия вы получите уведомление от нашего менеджера о приближающемся занятии',
					},
					{
						icon: APP_ICON.door,
						title: '4. Присоединяйся',
						description:
							'Отправим ссылку в любой удобный мессенджер для подключения к онлайн-трансляции в Skype или Zoom',
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
							'Разберем особенности и преимущества языка по сравнению с Objective-C и другими языками мобильной разработки.',
					},
					{
						title: '3. как проходит обучение',
						description:
							'Рассмотрим программу курса, расскажем о дипломных проектах и обсудим требования, без которых не стать iOS-разработчиком.',
					},
					{
						title: '4. первая практика',
						description: 'Напишем первый код на Swift',
					},
					{
						title: '5. живое общение',
						description: 'Познакомимся и ответим на все интересующие вопросы',
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
				title: 'по FRONTEND-разработке',
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
						description:
							'Наш менеджер вскоре свяжется, ответит и проконсультирует по всем вопросам и подтвердит регистрацию',
					},
					{
						icon: APP_ICON.calendar,
						title: '3. Напомним',
						description:
							'За несколько дней до начала занятия вы получите уведомление от нашего менеджера о приближающемся занятии',
					},
					{
						icon: APP_ICON.door,
						title: '4. Присоединяйся',
						description:
							'Отправим ссылку в любой удобный мессенджер для подключения к онлайн-трансляции в Skype или Zoom',
					},
				],
			},
			lessonProgramSection: {
				title: TEXT_CONFIG.sectionTitle.lessonProgram,
				items: [
					{
						title: '1. перспективы FRONTEND-разработки',
						description:
							'Почему создание сайтов и web-проложений так востребовано, какие тренды на рынке труда и в области frontend-разработки',
					},
					{
						title: '2. как проходит обучение',
						description:
							'Рассмотрим программу курса, расскажем о дипломных проектах и обсудим требования, без которых не стать frontend-разработчиком.',
					},
					{
						title: '3. HTML, CSS, JS',
						description: 'Познакомимся с основными технологиями современной frontend-разработки.',
					},
					{
						title: '4. первая практика',
						description: 'Напишем простой сайт на HTML',
					},
					{
						title: '5. общение',
						description: 'Познакомимся и ответим на все интересующие вопросы.',
					},
				],
			},
			whoInterestedSection: {
				title: TEXT_CONFIG.sectionTitle.whoInterested,
				items: [
					{
						icon: APP_ICON.webDev,
						title: 'Начинающим FRONTEND-разработчикам',
					},
					{
						icon: APP_ICON.webDesign,
						title: 'Дизайнерам, верстальщикам',
					},
					{
						icon: APP_ICON.webDev,
						title: 'Новичкам в программировании',
					},
					{
						icon: APP_ICON.webDesign,
						title: 'Абсолютно любому человеку',
					},
				],
			},
			developerCardSection: {
				title: 'КТО ТАКОЙ FRONTEND-РАЗРАБОТЧИК?',
				description1: 'Frontend-разработчик занимается созданием сайтов и web-приложений.',
				description2:
					'На курсе вы изучите основные инструменты Frontend-разработчика — HTML, CSS, JS,' +
					'а так же популярный и активно развивающийся фреймворк ReactJS. По данным DEV.BY,' +
					'средняя зарплата Frontend-разработчика — 130-140 тысяч рублей, а с опытом достигает 300 тысяч рублей в месяц',
			},
			enrollmentFormSection: {
				title: 'регистрируйся',
				description: 'На бесплатное пробное занятие по курсу FRONTEND-разработка',
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
				description: 'Научим разработке мобильных приложение на Swift',
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
				title: 'по FRONTEND-разработке',
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
					'Создавать сайты на HTML, CSS, JS',
					'Делать адаптивный и отзывчивый интерфейс',
					'Программировать анимации',
					'Работать с API различных сервисов',
					'Программировать функциональные компоненты',
					'Создавать web-приложения по на ReactJS',
					'Взаимодействовать с бекендом (сервером)',
					'Ставить и соблюдать сроки',
					'Подключать и использовать сторонние библиотеки',
					'Разбираться в чужом коде',
					'Привыкнешь писать самокомментируемый, качественный код',
					'И многое другое',
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
			description: 'Научим разработке мобильных приложение на Swift',
			period: 'за 6 месяцев',
		},
		[COURSE_ENUM.FRONTEND]: {
			date: '25 мая в 19:00',
			title: 'по FRONTEND-разработке',
			description: 'Научим с нуля HTML, CSS и JavaScript',
			period: 'за 6 месяцев',
		},
	},
	courseProgram: {
		[COURSE_ENUM.IOS]: {
			topics: [
				{
					title: 'Введение. Знакомство с XCode',
					paragraphs: ['Xcode - основная среда разработки', 'Симуляторы и Playground', 'Настройка проекта'],
				},
				{
					title: 'Основы языка программирования Swift',
					paragraphs: ['Понятие класса и объекта', 'Переменные - объявление, использование', 'Массивы — объявление, назначение, использование', 'Ветвление. Операторы if-else, switch'],
				},
				{
					title: 'Встроенные функции и модули',
					paragraphs: [
						'Методы — возвращаемые значения',
						'Кортежи. Создание и обработка',
						'Фильтрация и сортировка массивов',
						'Вложенные функции'
					],
				},
				{
					title: 'Объекты и классы',
					paragraphs: ['Классы — статические и динамические', 'Объединение объектов в массивы', 'Словари, как альтернатива массивов', 'Инкапсуляция массива в кастомные объекты' ],
				},
				{
					title: 'Опциональные свойства классов и объектов',
					paragraphs: ['Опциональные свойства — что это и зачем', 'Опасность guard и if-let — преимущества и как использовать', 'Создание кастомного объекта с опциональными свойствами'],
				},
				{
					title: 'Инкапсуляция',
					paragraphs: ['Cпецификаторы доступа public, private, file private', 'Принципы построения защищенного класса', 'Override — перегрузка операторов и функций для классов', 'Иерархия классов'],
				},
				{
					title: 'Графический интерфейс Xcode',
					paragraphs: ['UIView как контейнер', 'Работа со storyboard', 'UIViewController - основы', 'Сonstraints'],
				},
				{
					title: 'Таблицы. UITableViewController',
					paragraphs: ['Ячейки - динамические и статические', 'Управление таблицей - добавление ячеек, удаление, перемещение', 'Работа с командами Git', 'Github'],
				},
				{
					title: 'UIScrollView и UICollectionView.',
					paragraphs: ['Скроллинг текста на экране', 'Ячейки картинок - создание и управление', 'Создание фотоприложения', 'Импорт изображений в UICollectionView'],
				},
				{
					title: 'Обработка ошибок. Протоколы и делегаты',
					paragraphs: ['UIAlertController', 'Делегат', 'Протоколы - что это, создание, подключение'],
				},
				{
					title: 'Взаимодействие с UI. Даты',
					paragraphs: ['Обработка событий UX', 'UIImage — основы работы с изображениями', 'Класс Date — основы работы с датами', 'Форматирование дат'],
				},
				{
					title: 'Ввод текста и его обработка',
					paragraphs: ['UITextField и UITextView', 'Делегатные методы обоих классов', 'Обработка полученного текста', 'Форматирование текста, цвет и размер'],
				},
				{
					title: 'Предупреждения UIAlert и работа с клавиатурой',
					paragraphs: ['Создание всплывающего окна', 'Обработка события появления клавиатуры', 'Изменение констрейнов для адаптации UI к отображенной клавиатуре'],
				},
				{
					title: 'Контроллеры и навигация',
					paragraphs: ['Паттерны проектирования. MVC, VIPER, CleanSwift', 'UINavigationController и его использование. Навигация или present/dismiss. Стек навигации', 'Сохранение настроек приложения в UserDefaults' ],
				},
				{
					title: 'Распознавание жестов. Анимация',
					paragraphs: ['UIGestureRecognizer', 'Касания, свайп-жесты - распознавание и обработка', 'Базовая анимация, перемещение объектов'],
				},

				{
					title: 'Использование внутренних возможностей iPhone',
					paragraphs: [
						'Вызов других приложений',
						'Акселерометр, GPS',
						'CocoaPods - сторонние библиотеки',
					],
				},
				{
					title: 'Локализация и аудио/видео',
					paragraphs: ['Extensions -расширения классов', 'Воспроизведение аудио. AVAudioPlayer', 'Воспроизведение видео. AVPlayer и его особенности'],
				},
				{
					title: 'Профайлинг',
					paragraphs: ['Утечки памяти - опасность, причины, устранение', 'Профайлинг приложения - используемая память, скорость загрузки', 'Объекты в памяти. ARC. Потенциальные проблемы'],
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
	},
	priceCardsSection: {
		[COURSE_ENUM.IOS]: {
			title: 'Ждем тебя на курсе IOS-РАЗРАБОТКА',
			packages: [
				{
					priceData: {
						value: 1300,
						currency: TEXT_CONFIG.currency.BYN,
						sale: 15,
					},
					buyersChoice: true,
					paymentType: TEXT_CONFIG.paymentType.full.title,
					buttonText: TEXT_CONFIG.paymentType.full.buttonText,
				},
				{
					priceData: {
						value: 1500,
						currency: TEXT_CONFIG.currency.BYN,
					},
					paymentType: TEXT_CONFIG.paymentType.partly.title,
					buttonText: TEXT_CONFIG.paymentType.partly.buttonText,
				},
			],
		},
		[COURSE_ENUM.FRONTEND]: {
			title: 'Ждем тебя на курсе FRONTEND-РАЗРАБОТКА',
			packages: [
				{
					priceData: {
						value: 1300,
						currency: TEXT_CONFIG.currency.BYN,
						sale: 15,
					},
					buyersChoice: true,
					paymentType: 'Оплата сразу',
					buttonText: 'Оплатить сразу',
				},
				{
					priceData: {
						value: 1500,
						currency: TEXT_CONFIG.currency.BYN,
					},
					paymentType: 'В рассрочку',
					buttonText: 'Купить в рассрочку',
				},
			],
		},
	},
	reviewsSection: {
		title: 'Отзывы учеников',
		items: [
			{
				avatar: 'avatar-kirill.jpg',
				name: 'Кирилл Подольский',
				jobTitle: 'iOS-разработчик фрилансер',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/pki_1996'},
					{icon: APP_ICON.fbWhite, link: 'https://www.facebook.com/'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/podolsky_kirill/'},
				],
				comment:
					'Хотел бы искренне поблагодарить Дениса за его крутой курс по iOS разработке. Я прошел весь курс у него и ни на минуту не пожалел, что доверился Денису и его методам обучения, потому что он настолько все просто объясняет, что поймет даже тот, кто ничего не понимает в IT вовсе. Денис всегда помогал и отвечал на любые вопросы, подсказывал, если что-то не получалось, советовал как лучше, мотивировал и поддерживал на протяжении всего времени обучения. Курс помог мне освоить все основы программирования под iOS и научиться создавать реальные приложения для Apple Store, что позволило мне успешно построить карьеру в IT сфере как iOS developer и стать опытным специалистом. Всем советую не сомневаться и пройти обучение у Дениса!',
			},
			{
				avatar: 'avatar-alexey.jpg',
				name: 'Алексей Гапцар',
				jobTitle: 'iOS-разработчик в ООО "Бусел Капитал"',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/'},
					{icon: APP_ICON.fbWhite, link: 'https://www.facebook.com/'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/aromat_otchima/?igshid=1rq8j63ig43a1'},
				],
				comment:
					'Хотел бы сказать спасибо преподавателю курса Денису, я ранее имел опыт написания кода на другом языке, однако благодаря грамотно составленному материалу курса, а так-же внимательному и последовательному отношению самого преподавателя к обучению, я смог не только научиться разрабатывать приложения под iOS но и так-же находить решения сложных логических задач. Благодаря курсу, уже спустя месяц после его завершения, я успешно устроился на работу как iOS Developer, где с удовольствием работаю уже почти год.',
			},
			{
				avatar: 'avatar-vadim.jpg',
				name: 'Вадим Котковец',
				jobTitle: 'Frontend-разработчик в Netcracker',
				socialMedia: [{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/programisterx/'}],
				comment:
					'Хочу выразить благодарность всей команде IT-SKILLS.PRO и Павлу лично. Думаю, что именно благодаря его методам обучения и поддержке я смог стать настоящим программистом. Что немаловажно – город, где я живу, небольшой, и хорошую работу найти трудно. Я работаю на удаленке, зарабатываю уже неплохо. Очень доволен, что освоил новую для себя специальность, и сделал это именно с помощью данных курсов.',
			},
			{
				avatar: 'avatar-max.jpg',
				name: 'Максим Пронькин',
				jobTitle: 'Frontend-разработчик фрилансер',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/max.pronkin'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/max.pronkin/'},
				],
				comment: `Раньше я имел опыт в веб-дизайне, но решил стать разработчиком, т.к посчитао это более интересным и подходящим для себя направлением в IT, и не ошибся.
						Что можно выделить, так это грамотно составленный материал курса,
            			а так-же внимательное и последовательное отношение самого преподавателя к обучению,
            			Учюсь более 5 месяцев и уже в процессе обучения я нашел себе первую работу на фрилансе (сверстать landing page) и даже смог оплатить часть курсов. Всем рекомендую!`,
			},
			{
				avatar: 'avatar-artur.jpg',
				name: 'Артур Бакун',
				jobTitle: 'JS-разработчик в iTechArt Group',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/id151564153'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/arc_bak/'},
				],
				comment: `Начал курс, уже имея на тот момент опыт в другом языке программирования: пол года я учился программированию самостоятельно с нуля.
						В интернете есть множество курсов/вебинаров/книг, которые при желании можно достать бесплатно, но они не заменят курсы от IT-SKILLS.
						После обучения с Павлом я понял, насколько неэффективно было моё предыдущее обучения. Тут тебя везде направят и помогут, где у тебя проблемы, какую задачу хочешь решить.
						А самое главное - это подача информации, преподаватель очень понятно и просто объясняет и даже самые сложные вещи. Респект!`,
			},
			{
				avatar: 'avatar-nikita.jpg',
				name: 'Никита Изосимов',
				jobTitle: 'iOS-разработчик в "Сибинтек-Софт"',
				socialMedia: [
					{icon: APP_ICON.vkWhite, link: 'https://vk.com/kalina0036'},
					{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/_nikita.mmm/?igshid=4yle757je1p9'},
				],
				comment:
					'С Денисом начал обучение, уже имеющим на тот момент job offer, полтора года я учился самостоятельно с нуля. В интернете есть множество курсов/вебинаров/книг, которые при желании можно достать бесплатно, но они не заменят обучения с Денисом. Тут ты сам выбираешь, где у тебя проблемы, какую задачу хочешь решить, какое приложение будете разрабатывать, а на всех этих курсах частная/обобщенная информация, которая маловероятно понадобится в будущем. А самое главное, это твоя архитектура, как краеугольный камень приложения, что Денис очень подробно объясняет и постоянно бдит за ее соблюдением. Учимся уже более 3 месяцев, скоро будем делать релиз в AppStore ✌🏻С Денисом собираюсь учиться, пока не дойду до уровня middle разработчика.',
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
			{icon: APP_ICON.vkWhite, link: 'https://vk.com/itskillspro'},
			{icon: APP_ICON.instWhite, link: 'https://www.instagram.com/itskillspro/'},
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

const COACH_CONFIG = {
	[COURSE_ENUM.FRONTEND]: {
		title: 'Павел Унгур',
		subtitle: 'SENIOR FRONTEND-DEVELOPER',
		description1: 'Автор и преподаватель курса. 5 лет опыта во Fronted-разработке',
		description2:
			'Павел научит тебя разрабатывать сайты и web-приложения, даст полезные советы, лайфхаки, расскажет как успешно устроится на работу и выйти на хороший заработок в этой сфере',
	},
	[COURSE_ENUM.IOS]: {
		title: 'Денис Байдан',
		subtitle: 'SENIOR IOS-DEVELOPER',
		description1: 'Автор и преподаватель курса. 7 лет опыта в программировании, 5 лет в iOS-разработке',
		description2:
			'Денис научит тебя красиво и грамотно писать код на Swift, даст полезные советы, лайфхаки, расскажет как успешно устроится на работу и выйти на хороший заработок в этой сфере',
	},
};
