import React from 'react';
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StaticContent } from '../data/StaticContent';

const About = () => {
	return (
		<div className="about__container">
			{StaticContent.PageContent.About.map((section) => {
				return (
					<Accordion key={section.title} defaultExpanded>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">{section.title}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{ section.body.map(para =>  <Typography key={para.length} paragraph>{para} </Typography> )}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};

export default About;
