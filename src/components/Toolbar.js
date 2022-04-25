import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import mainContext from "../context/mainContext";
import http from "../plugins/http";
import {useNavigate} from "react-router-dom";

const Toolbar = () => {

    const {getUser, getLoggedIn, setPost} = useContext(mainContext)
    const nav = useNavigate()

    function AllOffers () {

        http.get( "/" ).then(data => {
            console.log(data)
            nav("/")
            setPost(data)
        })
    }

    return (
        <div className="toolbar d-flex space-around padding">


            <Link to="/login">
                <h2> Login </h2>
            </Link>
            <Link to="/register">
                <h2> Register</h2>
            </Link>
            <Link to="/">
                 <div className="aparticon">
                        <img onClick={AllOffers} src="https://static.wixstatic.com/media/308f3e_5de416d0378b4849aae912d0cf9c7387~mv2.png/v1/fill/w_272,h_160,al_c,usm_0.66_1.00_0.01,enc_auto/Rbhomes%20New%20LOGO%20Clear%20house.png" alt=""/>
                 </div>
            </Link>

            {getLoggedIn &&
            <div>
            {getUser.isAdmin === true ?
                <Link  to ="/create">
                    <h2>Create Offer</h2>
                </Link> :  ""
            }
            </div>
            }


        </div>
    );
};

export default Toolbar;