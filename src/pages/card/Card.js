import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocard, deletecartitem } from "../../Feature/Action/Action";
import DeleteIcon from '@mui/icons-material/Delete';
import './Card.css'
const Cart = () => {
    const state = useSelector((state) => state);
    console.log(state, "statecart");
    const dispatch = useDispatch();

    const deleteitem = (id) => {
        const delitem = state.cartItem.filter((item) => item.id !== id)
        dispatch(deletecartitem(delitem))
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>Card Item</h1>
            </div>
            <div className="row">
                {state.cartItem.map((item, i) => (
                    <div className="card" key={i}>

                        <div className="card1">
                            <div className="cardheader">
                                <img src={item.image} alt='' width='150px' height='150px'></img>
                            </div>
                            <div className="cardbody">
                                <p>
                                    {item.title.substr(0, 12)}
                                </p>
                                <h6>${item.price}</h6>
                                <p>{item.rating.rate}</p>
                                <IconButton onClick={() => deleteitem(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;