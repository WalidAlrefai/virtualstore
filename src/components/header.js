
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShopIcon from '@mui/icons-material/Shop';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './header.scss';



const Header = (props) => {
    const{cart}= props;
    console.log(cart,'cart');
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters className="header">
                    <div className="header-left" align='left'>
                        <ShopIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            // href="/"

                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Link className="link" to="/">Our Store</Link>
                        </Typography>
                    </div>
                    <div className="header-right" align='right'>
                        <Typography align='right' variant='subtitle1'>
                            <Link to='Cart'><ShoppingCartIcon />{cart.cartCount}</Link>
                        </Typography>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
const mapStateToProps = (state) => ({
    cart: state.cart,
});
export default connect(mapStateToProps)(Header);