import React from 'react';
import { Card, CardContent, CardActions, Typography } from '@material-ui/core';
import useStyles from './styles';

function Category({ category }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant='h5' gutterBottom>
						{category.name}
					</Typography>
				</div>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}></CardActions>
		</Card>
	);
}

export default Category;
