import React, {useContext} from 'react';
import MyCalendar from "./MyCalendar";
import {useNavigate, useParams} from "react-router-dom";
import http from "../plugins/http";
import mainContext from "../context/mainContext";

const SingleApartmentCard = ({post, getUser, setPost}) => {
    const _id = useParams()
    const nav = useNavigate()
    const {setSinglePost} = useContext(mainContext)

    function openSingle () {

        http.get( "/single/" + post._id).then(data => {
            console.log(data)
            nav("/single/" + post._id)
            setSinglePost(data)
        })
    }





    return (
        <div className="card m-20">

            <h2 >{post.description}</h2>
            <img
                onClick={openSingle}
                className="img2" src={post.photos[0]?.photo} alt=""/>
            <h3> {post.city}</h3>
            <h3> {post.price} eur</h3>
            <MyCalendar post={post} getUser={getUser} setPosts={setPost}/>


        </div>
    );
};

export default SingleApartmentCard;