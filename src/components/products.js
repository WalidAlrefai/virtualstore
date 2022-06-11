import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addCart } from '../store-toolkit/cart';
import { decrementStock } from '../store-toolkit/product';
import { setDeatils } from '../store-toolkit/details';
import { Link } from 'react-router-dom'
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './products.scss';

const Products = (props) => {
    const { addCart, decrementStock, setDeatils } = props;
    function addCartI(product, id) {
        // console.log(product,'product');
        if (product?.InStock > 0) {

            addCart({ ...product, cartId: id });
            decrementStock(product)
        } else {
            alert('Out of Stock');
        }
    }
    const setDeatilsI = (product, id) => {
        setDeatils({...product,cartId: id})
    }
    return (
        <div className="products">

            {props.products.map((product, i) => {
                let linkUrl = `Details/${product.name.toLowerCase().replace(/ /g, '-')}`;
                // console.log(props.activeCategory,'product');
                if (props.activeCategory?.name === product.category) {
                    // console.log(product.category);
                    return (
                        <Card key={i} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.url}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    InStock : {product.InStock}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    <AddShoppingCartIcon onClick={() => { addCartI(product, i) }} />
                                </IconButton>
                                <Link to={linkUrl} onClick={() => setDeatilsI(product,i)} size="small" color="primary">
                                    VIEW DETAILS
                                </Link>
                            </CardActions>
                        </Card>
                    )

                } else {
                    return null;
                }
            })
            }

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        activeCategory: state.categories.activeCategory,
        cart: state.cart,
        // product:state.product
    }
};
const mapDispatchToProps = {
    addCart,
    decrementStock,
    setDeatils
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);