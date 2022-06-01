import Categories from './categories.js';
import Products from './products.js';
import './store.scss';
function Store() {
    return (
        <div className="frontStore">
            <Categories />
            <Products />
        </div>
    );
}

export default Store;