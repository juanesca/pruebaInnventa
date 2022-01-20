import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='topnav'>
                <nav className='n'>
                    <div>
                        <Link to="/" className='Link active '>
                            Dashboard
                        </Link>
                        <Link to="/register" className='Link'>
                            Registrar
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
