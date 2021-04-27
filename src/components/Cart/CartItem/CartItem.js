import React from 'react';
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import useStyles from './styles';

export default function CartItem({ item, onUpdateCartQty, onRemvoeFromCart }) {
	const classes = useStyles();
	return (
		<Card>
			<CardMedia
				image={item.media.source}
				alt={item.name}
				className={classes.media}
			/>
			<CardContent className={classes.cardContent}>
				<Typography variant='h4'>{item.name}</Typography>
				<Typography variant='h5'>
					{item.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div className={classes.buttons}>
					<Button
						type='button'
						size='small'
						onClick={() =>
							onUpdateCartQty(item.id, { quantity: item.quantity + 1 })
						}
					>
						+
					</Button>
					<Typography>{item.quantity}</Typography>
					<Button
						type='button'
						size='small'
						onClick={() =>
							onUpdateCartQty(item.id, { quantity: item.quantity - 1 })
						}
					>
						-
					</Button>
				</div>
				<Button
					type='button'
					color='secondary'
					variant='contained'
					onClick={() => onRemvoeFromCart(item.id)}
				>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
}
