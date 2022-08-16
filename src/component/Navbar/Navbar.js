import React, { useState } from 'react';
import './Navbar.css'
import { FiX, FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { TextField, IconButton, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SearchOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const Handleclick = () => { setOpen(!open) }
    const Handleclose = () => { setOpen(false) }
    const state = useSelector((state) => state.favItem)
    const dispatch = useDispatch()
    const logout = () => {
        localStorage.setItem('userlogin', false);
        window.location.reload();
        dispatch({
            type: "logout",
            payload: { isAuthenticaticon: false }
        })
    }
    return (
        <nav className='navbar'>
            <h1>E-Shop</h1>
            <form><input type='text' placeholder='enter products and brand'></input>
                <IconButton className='iconbtn'>
                    <SearchOutlined />
                </IconButton>
            </form>
            <div onClick={Handleclick} className='logo'>
                {open ? <FiX /> :
                    <FiMenu />}
            </div>
            <ul className={open ? 'navlinks active' : 'navlinks'}>
                <Link to='/favorite'>
                    <IconButton className='navitem' onClick={Handleclose}>
                        <Badge className='badgebtn' badgeContent={state.length} color="error"> <FavoriteIcon className='favicon' /></Badge>
                    </IconButton>
                </Link>
                <li onClick={Handleclose} className='navitem'><Link to='/cart' className='navlink'>Card</Link></li>
                <li onClick={Handleclose} className='navitem'><Link to='/login' className='navlink' onClick={() => logout()}>Logout</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;
