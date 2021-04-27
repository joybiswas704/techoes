import React, { useState, useEffect } from 'react';
import {
	Products,
	Cart,
	Navbar2,
	LogIn,
	Checkout,
	Jumbotron,
} from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = async () => {
		const { data } = await commerce.products.list({ slug: 'cpu' });
		console.log(data);
		setProducts(data);
	};

	const fetchCategory = () => {
		commerce.categories.list().then((category) => console.log(category.name));
	};

	const fetchCart = async () => {
		const cart = await commerce.cart.retrieve();
		setCart(cart);
	};

	// const logIn = () => {
	// 	commerce.customer
	// 		.login('joy.biswas704@gmail.com', 'http://localhost:3000/logIn')
	// 		.then((token) => console.log(token));
	// };

	const handleAddToCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.add(productId, quantity);
		setCart(cart);
	};

	const handleUpdateCartQty = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, quantity);
		setCart(cart);
	};

	const handleRemoveFromCart = async (productId) => {
		const { cart } = await commerce.cart.remove(productId);
		setCart(cart);
	};

	const handleEmptyCart = async () => {
		const { cart } = await commerce.cart.empty();
		setCart(cart);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
		fetchCategory();
	}, []);

	return (
		<Router>
			<div>
				<Navbar2 totalItems={cart.total_items} />
				<Switch>
					<Route exact path='/'>
						<Jumbotron />
						<Products products={products} onAddToCart={handleAddToCart} />
					</Route>
					<Route exact path='/cart'>
						<Cart
							cart={cart}
							handleUpdateCartQty={handleUpdateCartQty}
							handleRemoveFromCart={handleRemoveFromCart}
							handleEmptyCart={handleEmptyCart}
						></Cart>
					</Route>
					<Route exact path='/products'>
						<Products products={products} onAddToCart={handleAddToCart} />
					</Route>
					<Route exact path='/login'>
						<LogIn />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
