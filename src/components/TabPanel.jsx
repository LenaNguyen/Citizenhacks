import React from 'react';
import { Container } from '@material-ui/core';

const TabPanel = ({ curIndex, index, children, ...other }) => {
	console.log(curIndex, index);
	return (
		<Container
			role='tabpanel'
			hidden={curIndex !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			{...other}
		>
			{children}
		</Container>
	);
}

export default TabPanel;