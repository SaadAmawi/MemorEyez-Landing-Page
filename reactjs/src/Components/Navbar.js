import React,{useState} from 'react'
// import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button';
import './Navbar.css';
import './Button.css';
// import { HashLink as Links } from 'react-router-hash-link';
// import AnchorLink from 'react-anchor-link-smooth-scroll';


function Navbar() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    const handleCLick = () => setClick(!click);
    // const [button, setButton] = useState(true);
//     const showButton = () => {if(window.innerWidth <= 960){
//         setButton(false)
//     }else{
//         setButton(true)
//     }
// };

// useEffect(() => {
//     showButton()
// },[])

// window.addEventListener('resize',showButton);
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
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
           Home
            </Link>           
        </li>
        <li className = 'nav-item'>
            <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
            Services
            </Link>            
        </li>
        <li className = 'nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
            </Link>          
        </li>
       
        </ul>
     </div>
    </nav>
    </>
  )
}

export default Navbar