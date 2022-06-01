import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux';
import {removeCart} from '../../store/cart.js';

const SimpleCart = (props) => {
    const {removeCart,cart} = props;
    return (
        <div className="simpleCart">
            <Grid item xs={12} md={6}>
                {
                    cart.cart.map((item,i)=>{
                        return(
                            <List key={i} sx={{ width: '100%', maxWidth: 360, bgcolor: '#EEE' }}>
                                <ListItem>
                                    <ListItemText primary={item.name}  />
                                    {/* secondary={item.price} */}
                                    <IconButton onClick={()=>{removeCart(item)}}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            </List>
                        )
                    })
                }
            </Grid>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        cart:state.cart
    }
};
const mapDispatchToProps = {
    removeCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);