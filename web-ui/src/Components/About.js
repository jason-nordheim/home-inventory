import React from 'react';
import { Container, Accordion, Typography, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StaticContent } from '../data/StaticContent';

const About = () => {
	return (
		<Container>
			{StaticContent.PageContent.About.map((section) => {
				return (
					<Accordion defaultExpanded>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">{section.title}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{ section.body.map(para => {
                                return <Typography paragraph>{para} </Typography>
                            })}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</Container>
	);
};

export default About;
