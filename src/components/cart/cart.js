import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { removeCart } from '../../store/cart.js';
import { incrementStock } from '../../store/products.js';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

import './cart.scss';

const Products = (props) => {
    const { removeCart, incrementStock, cart } = props;
    function removeCartI(product, id) {
        removeCart(product);
        incrementStock(product)
    }
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="cards">
            {cart.cart.map((item, i) => {
                return (<Card key={i} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price : {item.price}$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton onClick={() => { removeCartI(item) }}>
                            <DeleteIcon /> delete
                        </IconButton>
                    </CardActions>
                </Card>
                )
            })}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
};
const mapDispatchToProps = {
    removeCart,
    incrementStock,
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);