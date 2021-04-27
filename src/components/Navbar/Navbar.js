import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/ecommerce.png';
import useStyles from './styles';

export default function Navbar({ totalItems }) {
	const classes = useStyles();
	return (
		<>
			<AppBar position='fixed' className={classes.appBar} color='inherit'>
				<Toolbar>
					<Typography variant='h6' className={classes.title} color='inherit'>
						<img
							src={logo}
							alt='Micro-Tech'
							height='25px'
							className={classes.image}
						/>
						Micro-Tech
					</Typography>
					<div className={classes.grow} />
					<div className={classes.button}>
						<IconButton aria-label='Show cart items' color='inherit'>
							<Badge badgeContent={totalItems} color='secondary'>
								<ShoppingCart />
							</Badge>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
}
