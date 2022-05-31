import { connect } from 'react-redux';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './products.scss';

const Products = (props) => {
    return (
        <div className="products">
            {props.products.map((product, i) => {
                if (props.activeCategory.name === product.category) {
                    console.log(product.category);
                    return (<Card key={i} sx={{ maxWidth: 345 }}>
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
                                Price : {product.price}$
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                    )

                }else{
                    return null;
                }

            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        activeCategory: state.categories.activeCategory
    }
}
export default connect(mapStateToProps)(Products);