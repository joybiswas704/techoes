import React, { useEffect, useState } from 'react';
import { commerce } from '../../lib/commerce';
import { useParams, Link } from 'react-router-dom';

function LogInCallback() {
	const [jwt, setJwt] = useState('');
	let { token } = useParams();

	const handleLogInCallback = async () => {
		const data = await commerce.customer.getToken(token, true);
		setJwt(data.jwt);
		console.log(jwt);
	};

	const getCustomer = async () => {
		const customer = await commerce.customer.about();
		console.log(customer);
	};

	handleLogInCallback();

	return <div>{`Token: ${token} ; jwt: ${jwt}`}</div>;
}

export default LogInCallback;
