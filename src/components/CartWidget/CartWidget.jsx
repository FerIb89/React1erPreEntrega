import * as Icon from 'react-bootstrap-icons';
import './styles.css';

const CartWidget = () => {
    return (
        <div className='conteiner-carrito'>
            <Icon.Cart4/>

            <div className='cartWidget'>
                <span>3</span>
            </div>
        </div>

    );
};

export default CartWidget