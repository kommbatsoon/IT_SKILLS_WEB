import React, {useState} from 'react';

import {Button, SectionContainer} from '@app/components';
import {getClassName} from '@util/helpers';
import {TEXT_CONFIG} from '@util/config/text.config';
import {COURSE_ENUM} from '@util/constants';
import {GLOBAL_CONFIG} from '@util/config';

import style from './CourseProgramSection.scss';

const DISPLAYED_COUNT = 6;

export const CourseProgramSection = ({course = COURSE_ENUM.IOS, className}) => {
	const config = GLOBAL_CONFIG.courseProgram[course];

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
