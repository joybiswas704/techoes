import React from 'react';
import Products from '../Products/Products';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function CategorizedProducts({ onAddToCart, products }) {
	let categorizedProducts = [];
	const fetchCategorizedProducts = (category) => {
		if (products.length > 1) {
			categorizedProducts = products.filter(
				(product) => product.categories[0].slug === category
			);
			console.log(categorizedProducts);
		} else {
			console.log('nothing');
		}
	};

	let { id } = useParams();
	fetchCategorizedProducts(id);

	return (
		<div>
			<h1>Categorized Products</h1>
			<Products products={categorizedProducts} onAddToCart={onAddToCart} />
			<Link
				to='/category'
				style={{
					textDecoration: 'none',
					display: 'flex',
					justifyContent: 'center',
					margin: '25px',
				}}
			>
				<Button variant='outlined'>Go Back</Button>
			</Link>
		</div>
	);
}

export default CategorizedProducts;
