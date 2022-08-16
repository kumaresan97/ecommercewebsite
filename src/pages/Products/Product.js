
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios";
import {
    addtocard,
    addtofavitem,

} from '../../Feature/Action/Action'
import "./Product.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { deletefavitem } from "../../Feature/Action/Action";
const url = "https://fakestoreapi.com/products";
const Product = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const [isloading, setIsloading] = useState(false);
    // const productLists = useSelector((state) => state.products);
    // const loading = useSelector((state) => state.productLoading);
    // console.log(loading, "state product");
    useEffect(() => {
        fetchproduct();
        // dispatch(fetchProductRequest({ type: "FETCH_PRODUCT_REQUEST" }));
        // dispatch(fetchProductByCategory({type: 'FETCH_PRODUCT_REQUEST', category: 'electronics'}))
        // setIsloading(true);
    }, []);

    // useEffect(() => {
    //     setProduct(productLists);
    //     setIsloading(false);
    // }, [productLists]);
    const fetchproduct = () => {
        setIsloading(true);
        axios.get(url).then((response) => {
            setProduct(response.data);
            setIsloading(false);
            console.log(response.data);
        });
    };
    const additem = (data1) => {
        //   dispatch(addtocard(temp));
        //   return;
        // }

        dispatch(addtocard(data1));
    };
    const addfavor = (data) => {


        if (state.favItem.some((fav) => fav.id === data.id)) {
            deletefav1(data.id);
            return;
        }
        console.log((state.favItem.some((fav) => fav.id === data.id)))
        console.log(data);
        dispatch(addtofavitem(data));


    }

    const handle = (e) => {
        let searching = product.filter((data5) =>
            data5.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setProduct(searching);
    };
    const gotoproductdetail = (item) => {
        navigate(`/products/${item.id}`);
    };
    const deletefav1 = (id) => {
        const delitem1 = state.favItem.filter((item) => item.id !== id)
        console.log(delitem1, 'delitem1');
        dispatch(deletefavitem(delitem1))
    }

    return (
        <div className="container">
            {isloading ? <CircularProgress className="loadicon"></CircularProgress> :
                <>
                    <div className="heading">
                        <h1>Product List</h1>
                    </div>
                    <div className="row">
                        {product.map((item, i) => (
                            <div className="card" key={i}  >

                                <div className="card1">
                                    <div className="cardheader">
                                        <img src={item.image} alt='' width='150px' height='150px' onClick={() => gotoproductdetail(item)}></img>
                                    </div>
                                    <div className="cardbody">
                                        <p>
                                            {item.title.substr(0, 12)}
                                        </p>
                                        <h6>${item.price}</h6>
                                        <IconButton onClick={() => additem(item)} >
                                            <ShoppingCartIcon></ShoppingCartIcon>
                                        </IconButton>
                                        <IconButton onClick={() => addfavor(item)} style={state.favItem.some((fav) => fav.id === item.id) ? { color: 'red' } : { color: '#000' }}>
                                            <FavoriteIcon></FavoriteIcon>
                                        </IconButton>

                                    </div>



                                </div>

                            </div>
                        ))}

                    </div>
                </>}


        </div>

    );
};

export default Product;
