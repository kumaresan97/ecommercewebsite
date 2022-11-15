import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Productdetail.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
const Productdetails = () => {
    const [detail, setDetail] = useState({});
    let params = useParams();
    useEffect(() => {
        detailpage();
    }, []);
    const detailpage = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => res.json())
            .then((json) => {
                setDetail(json);
            });
    };
    return (
        <div className="detailcontainer">
            <div className="detailrow">
                <div className="detailimg">
                    <img src={detail.image} ></img>
                </div>
                <div className="detailheading">
                    <h2>ID:{detail.id}</h2>
                    <p>Desc:{detail.description}</p>
                    <h6>${detail.price}</h6>
                    <Link to='/'>
                        <IconButton >
                            <KeyboardBackspaceIcon className="backiconbtn" />
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Productdetails;
