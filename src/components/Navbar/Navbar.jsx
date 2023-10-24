import './styles.css';
import { Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container" >
            <img className='logo-ofiMuebles' src={'./logoOfiMueble.png'} alt="logo" width={'150px'} />                   
                <CartWidget />
            </div>
            
            <div>
                <ul className='list-container'>
                    <li><Button className='li' variant="outline-danger">Inicio</Button>{' '}</li>
                    <li><Button className='li' variant="outline-danger">Escritorios</Button>{' '}</li>
                    <li><Button className='li' variant="outline-danger">Sillas</Button>{' '}</li>
                    <li><Button className='li' variant="outline-danger">Sillones</Button>{' '}</li>
                    <li><Button className='li' variant="outline-danger">Armarios</Button>{' '}</li>
                    <li><Button className='li' variant="outline-danger">Cajoneras</Button>{' '}</li>     
                   

                </ul>

            </div>
           
        </div>
    )
};
export default Navbar;