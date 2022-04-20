import React, {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";
import http from "../plugins/http";

const Login = () => {

    const {getError, setError, getUser, setLoggedIn} = useContext(mainContext)

    const nav = useNavigate()

    const email = useRef()
    const password = useRef()
    const loggedIn = useRef()

    async function login () {
        const userLog = {
            email: email.current.value,
            password: password.current.value,
            loggedIn: loggedIn.current.checked
        }
        await http.post( "/login", userLog).then(data => {
            console.log(data)
            if (!data.success) {
                setError(data.message)
            } else {
                localStorage.setItem("userId", data.user.id)
                setError(null)
                setLoggedIn(data.user.email)
                if (data.user.isAdmin === true) {
                    nav("/create")

                } else {
                    nav("/")
                }
            }
        })
    }

    return (
        <div className="card d-flex a-center j-center column">

            <input type="text" ref={email} placeholder="email"/>
            <input type="text" ref={password} placeholder="password"/>
            <button onClick={login}>Login</button>
            {getError && <h3>{getError}</h3>}
            <div className="d-flex">
                <label htmlFor="check">Stay logged in</label>
                <input ref={loggedIn} type="checkbox" id="check"/>
            </div>
        </div>
    );
};

export default Login;