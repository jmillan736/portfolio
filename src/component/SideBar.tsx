import { GitHub } from 'react-feather';
import { Link } from 'react-router-dom';
import '../App.css';




export const SideBar = () => {
    return (
        <div className='App-sideBar'>
            <h3>Jeffrey Millan</h3>
            <div className='sideBar-List'>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/about'>
                    About
                </Link>
                <a href="https://github.com/jmillan736" target="_blank" rel="noopener noreferrer">
                    <GitHub color='black' />
                </a>
            </div>
        </div>
    )
};