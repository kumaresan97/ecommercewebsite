import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import {
    VisibilityOff as VisibilityOffIcon,
    Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
const Login = () => {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [showpassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const client = [
        {
            username: "kumar",
            password: "kumar@10",
        },
        {
            username: "sakthi",
            password: "sakthi@10",
        },
        {
            username: "bharathi",
            password: "bharathi@10",
        },
    ];
    const navigate = useNavigate();
    const namehandler = (e) => {
        setUname(e.target.value);
        console.log(e.target.value);
    };
    const passhandler = (e) => {
        setPass(e.target.value);
        console.log(e.target.value);
    };
    const submit = () => {
        // if (username == "kumaresh" && password == "kumar@123") {
        //   navigate("Navbar");
        // } else {
        //   navigate("/");
        // }

        console.log(uname, 'uname');
        const isExist = client.find((cred) => cred.username === uname);
        console.log("isexist", isExist);
        if (!isExist) {
            toast("Username doesnt exist");

        }
        const isPwdCorrect = isExist.password === pass;
        console.log(isPwdCorrect, 'ispassword');
        if (isPwdCorrect) {
            localStorage.setItem('userlogin', true);
            dispatch({
                type: "login",
                payload: { isAuthenticaticon: true },
            })
            toast("Successfully loggedIn!!");
            navigate("/");
        } else {
            toast("Password  incorrect !!");
        }

    };
    return (
        <div className="Loginpage">
            <div className="Login">
                <h5>Login</h5>
                <div className="logincontent">
                    <label className="name">userName</label>
                    <br />
                    <input className='log-input'
                        type="text"
                        name="username"
                        placeholder="enter username"
                        onChange={namehandler}

                    ></input>
                </div>
                <div>
                    <label className="name">password</label>
                    <br />
                    <input className='log-input'
                        type={showpassword ? "text" : "password"}
                        name="password"
                        placeholder="enter password"
                        onChange={passhandler}

                    ></input>
                    {showpassword ? (
                        <VisibilityIcon onClick={() => setShowPassword(false)} />
                    ) : (
                        <VisibilityOffIcon onClick={() => setShowPassword(true)} />
                    )}
                </div>
                <div className='login-button'>
                    <button onClick={submit}>login</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
