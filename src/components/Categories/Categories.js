import React from 'react';
import { Grid } from '@material-ui/core';
import Category from './Category/Category';
import useStyles from './styles';
import { Link } from 'react-router-dom';

function Categories({ categories }) {
	const classes = useStyles();

	return (
		<main className={classes.contain}>
			<h1 style={{ display: 'flex', justifyContent: 'center' }}>
				MOST POPULAR CATEGORIES
			</h1>
			<div className={classes.toolbar} />
			<Grid container justify='center' spacing={4}>
				{categories.map((category) => (
					<Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>
						<Link
							to={`/category/${category.slug}`}
							style={{ textDecoration: 'none' }}
						>
							<Category category={category} />
						</Link>
					</Grid>
				))}
			</Grid>
		</main>
	);
}

export default Categories;
