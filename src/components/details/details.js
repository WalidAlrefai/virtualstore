import './details.scss'
import { connect } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import { addCart } from '../../store-toolkit/cart';
import { decrementStock } from '../../store-toolkit/product';
import './details.scss'

function ProductDetails(props) {
    const { details, decrementStock, addCart } = props;
    // console.log(details, 'details');
    const addCartI = (product, id) => {
        if (product?.InStock > 0) {

            addCart(product, id);
            decrementStock(product)
        } else {
            alert('Out of Stock');
        }
    }
    console.log(details, 'details');
    return (
        <div className="product-details" >
            <Card sx={{ maxWidth: 400 }} style={{ marginLeft: '150px' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {details.details.name}
                </Typography>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={details.details.url}
                />
                <CardContent className="card">
                    <Typography variant="body2" color="text.secondary">
                        InStock : {details.details.InStock}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price : {details.details.price}$
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ marginTop: '2px' }}>
                <Button onClick={() => { addCartI(details.details, details.details.cartId) }}>Add To Cart</Button>
            </ButtonGroup>

            <Typography gutterBottom variant="h4" component="h5" style={{ marginTop: '40px' }}>
                Related Items
            </Typography>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ marginTop: '2px' }}>
                <Button>Suggestion 1</Button>
                <Button>Suggestion 2</Button>
                <Button>Suggestion 3</Button>
            </ButtonGroup>

            <div style={{ marginTop: "40px" }}>
                <Typography variant="h4" component="h5" style={{ margin: '40px 0 40px 0' }}>
                    Product Details
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Specifications</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Customer Reviews</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        details: state.details
    }
}
const mapDispatchToProps = {
    addCart,
    decrementStock
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)