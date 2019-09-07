import React, { Component } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import LockIcon from '@material-ui/icons/Lock';
import Tabs from '../components/Tabs';
import TabPanel from '../components/TabPanel';

const tempPendingWebsites = [
	{
		id: 1,
		url: 'https://facebook.com',
		safe: true
	},
	{
		id: 2,
		url: 'https://cponline.pw/',
		safe: false
	},
]

const tempBlockListWebsites = [
	{
		id: 1,
		url: 'www.clubpenguin.com',
		safe: true
	},
	{
		id: 2,
		url: 'www.google.com',
		safe: false
	},
]

const styles = {
	tabPanel: {
		padding: '20px',
		margin: '0px 10px',
	},
	gridItem: {
		textAlign: 'center',
	},
	container: {
		margin: '20px 0px',
		padding: '20px 0px',
		'&:hover': {
			boxShadow: '0 0 11px rgba(33,33,33,.2)'
		}
	},
	a: {
		fontFamily: 'Roboto',
		textDecoration: 'none',
		cursor: 'pointer',
		fontWeight: '100'
	},
}

class WebsiteLists extends Component {

	state = {
		curTab: 0,
	}

	componentWillMount() {
		this.setState({
			pendingList: tempPendingWebsites,
			blockList: tempBlockListWebsites
		})
	}

	handleSignOut = () => {
		const { userSession } = this.props;
		userSession.signUserOut();
		window.location = "/";
	};

	handleSelect = (newTab) => {
		this.setState({ curTab: newTab });
	}

	renderListItems = (items) => {
		const { classes } = this.props;
		return (items.map(item => {
			return (
				<Paper className={classes.container}>
					<Grid container spacing={0}>
						<Grid item xs={9} className={classes.gridItem}>
							{<a href={item.url} target='_blank' rel="noopener noreferrer" className={classes.a}>
								<Typography variant='h6' color='primary'>{item.url} </Typography>
							</a>}
						</Grid>
						<Grid item xs={3} className={classes.gridItem} >
							<LockIcon color={item.safe ? 'primary' : 'error'} style={{ fontSize: 30 }} className={classes.a} />
						</Grid>
					</Grid>
				</Paper>
			)
		})
		)
	}


	render() {
		const { curTab, pendingList, blockList } = this.state;
		const { classes } = this.props;
		console.log(pendingList, blockList);
		return (
			<React.Fragment>
				<Tabs curTab={curTab} handleSelect={this.handleSelect} handleSignOut={this.handleSignOut} />
				<TabPanel index={0} curIndex={curTab} className={classes.tabPanel}>
					{this.renderListItems(pendingList)}
				</TabPanel>
				<TabPanel index={1} curIndex={curTab}>
					{this.renderListItems(blockList)}
				</TabPanel>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(WebsiteLists);