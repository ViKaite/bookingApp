import React, {useContext} from 'react';
import {useState, useRef} from "react";
import http from "../plugins/http";
import {useNavigate} from "react-router-dom";
import mainContext from "../context/mainContext";

const Register = () => {

    const {setUser,} = useContext(mainContext)

    const emailRef = useRef()
    const passRef = useRef()
    const passTwoRef = useRef()
    const checkAdmin = useRef()

    const [error, setError] = useState(null)

    const nav = useNavigate()

    async function send() {
        const user = {
            email: emailRef.current.value,
            passOne: passRef.current.value,
            passTwo: passTwoRef.current.value,
            isAdmin: checkAdmin.current.checked
        }

        await http.post( "/register", user).then (data => {
            console.log(data)
            if (!data.success) {
                setError(data.message)
            } else {
                setError(null)
                nav("/login")
                setUser(data.user)

            }
        })
    }

    return (
        <div className="card d-flex a-center column j-center">

                <input type="text" ref={emailRef} placeholder="email"/>
                <input type="text" ref={passRef} placeholder="password"/>
                <input type="text" ref={passTwoRef} placeholder="password2"/>
                <button onClick={send}>Register</button>
                {error && <div><b>{error}</b></div>}
                <div className="d-flex ">
                    <label htmlFor="Admin"> Admin</label>
                    <input ref={checkAdmin} type="checkbox" id="Admin"/>
                 </div>


        </div>
    );
};

export default Register;