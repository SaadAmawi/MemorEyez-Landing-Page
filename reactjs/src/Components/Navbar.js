import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
import './Button.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    const handleCLick = () => setClick(!click);
    const [button, setButton] = useState(true);
    const showButton = () => {if(window.innerWidth <= 960){
        setButton(false)
    }else{
        setButton(true)
    }
};

useEffect(() => {
    showButton()
},[])

window.addEventListener('resize',showButton);
  return (
    <>
    
     <nav className="navbar">

      <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <i class="fa-regular fa-eye"></i>&nbsp;MemorEyez 
        </Link>

        <div className='menu-icon' onClick={handleCLick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars' }/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className = 'nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
            <i class="fa-solid fa-house"></i>&nbsp;Home
            </Link>           
        </li>
        <li className = 'nav-item'>
            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
            <i class="fa-solid fa-list-check"></i> &nbsp;Projects
            </Link>            
        </li>
        <li className = 'nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
            <i class="fa-regular fa-address-card"></i>&nbsp;About
            </Link>          
        </li>
        <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
     </div>
    </nav>
    </>
  )
}

export default Navbar