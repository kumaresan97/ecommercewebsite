import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import './Favorite.css'
import { deletefavitem } from '../../Feature/Action/Action';
import { IconButton } from "@mui/material";


const Favorite = () => {
    const state = useSelector((state) => state);
    console.log(state, "statecart");
    const dispatch = useDispatch();

    const deletefav = (del) => {
        const delitem = state.favItem.filter((item) => item.id !== del.id)
        dispatch(deletefavitem(delitem))
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>Favorite Item</h1>
            </div>
            <div className="row">
                {state.favItem.map((item, i) => (
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
                                <IconButton onClick={() => deletefav(item)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorite
