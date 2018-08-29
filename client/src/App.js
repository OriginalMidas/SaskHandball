import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Payments from './Components/Payments';
import LeagueSelect from './Components/LeagueSelect';
import { Grid, Card, CardContent } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
	layout: {
		marginTop: '10%',
		width: 'auto',
		display: 'block', // Fix IE11 issue.
		padding: '10px',
	},
};

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="background-image" />
				<div className="app" style={styles.layout}>
					<Grid
						container
						spacing={24}
						direction="column"
						justify="center"
						alignItems="center"
					>
						<Card raised="true">
							<CardContent>
								<Grid item xs={24} L={24}>
									<LeagueSelect />
									<Payments />
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
