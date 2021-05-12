import React, { useState, useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import {
	Paper,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../CheckoutForm/CustomTextField';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function LogIn() {
	const handleLogIn = (data) => {
		fetchLogInToken(data);
	};

	const fetchLogInToken = (data) => {
		// const token = await commerce.customer.login(
		// 	data.email,
		// 	'http://localhost:3000/login/callback'
		// );

		// commerce.request('customers/email-token', 'post', {
		// 	email: 'joy.biswas704@gmail.com',
		// 	base_url: 'http://localhost:3000/login/callback',
		// });
		const url = new URL('https://api.chec.io/v1/customers');

		let headers = {
			'X-Authorization': 'pk_25171b73de6d189d187ee4803897c9542731c35233430',
			'Content-Type': 'application/json',
			Accept: 'application/json',
		};

		let body = {
			email: 'joy.biswas704@gmail.com',
			firstname: 'Leslie',
			lastname: 'Lawless',
			external_id: 'MY_CRM_USER_123',
		};

		fetch(url, {
			method: 'POST',
			headers: headers,
			body: body,
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	};

	const classes = useStyles();
	const methods = useForm();
	return (
		<div className={classes.toolbar}>
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant='h4' align='center'>
						Login
					</Typography>
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit((data) => handleLogIn(data))}>
							<Grid container spacing={3}>
								<FormInput required name='email' label='Email' />
								<FormInput required name='password' label='Password' />
							</Grid>
							<br />
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Button component={Link} to='/' variant='outlined'>
									Back to Home
								</Button>
								<Button variant='contained' type='submit' color='primary'>
									Sign In
								</Button>
							</div>
						</form>
					</FormProvider>
				</Paper>
			</main>
		</div>
	);
}
