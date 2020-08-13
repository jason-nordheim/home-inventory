import React from 'react';
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StaticContent } from '../../data/StaticContent';

const HomeUnAuthenticated = () => {
	return (
		<div className="about__container">
			{StaticContent.PageContent.About.map((section) => {
				return (
					<Accordion className="about__accordion" key={section.title} defaultExpanded>
						<AccordionSummary className="about__accordionSummary" expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{section.title}</Typography>
						</AccordionSummary>
						<hr /> 
						<AccordionDetails className="about__accodionDetails">
							<AccordianLeft>
								{ section.body.map(para => <Typography key={para.length} paragraph>{para} </Typography> )}
							</AccordianLeft>
							<AccordianRight>
							</AccordianRight>
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};

const AccordianLeft = ({ children}) => {
	return (
		<div className="accordianLeft__container">
			{ children }
		</div>
	)
}

const AccordianRight = ({ children }) => {
	return (
		<div className="accordianRight__container">
			{ children }
		</div>
	)
}

export default HomeUnAuthenticated;
