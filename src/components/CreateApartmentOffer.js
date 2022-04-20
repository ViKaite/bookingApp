import React, {useState, useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import PhotoBlock from "./photo/photoBlock";
import mainContext from "../context/mainContext";
import http from "../plugins/http";

const CreateApartmentOffer = () => {
    const photoUrl = useRef()

    const city = useRef()
    const price = useRef()
    const description = useRef()

    const [photos, setPhotos] = useState([])

    const nav = useNavigate()

    const {getError, setError, setPost, getPost} = useContext(mainContext)

    //
    // function addPhoto() {
    //     const photo = {
    //         photo: photoUrl.current.value,
    //         userId: localStorage.getItem("userId")
    //     }
    //
    //     http.post("/uploadPhoto", photo ).then(data => {
    //         if (!data.success) {
    //             setError(data.message)
    //         } else {
    //             setError(null)
    //             setPhotos(data.photos)
    //         }
    //     })
    // }

    function uploadPost() {
        const post = {
            photos: photos,
            city: city.current.value,
            price: price.current.value,
            description: description.current.value,
            userId: localStorage.getItem("userId")
        }
        console.log(post)
        http.post( "/upload-post", post).then(data => {
            console.log(data)
            if (!data.success) {
                setError(data.message)
            } else {
                setError(null)
                setPost(data.posts)
                nav("/")
            }
        })
    }

    return (
        <div>
            <div className="offerCard d-flex j-center column padding">
                <h2>Create Offer</h2>
                <div>

                    <PhotoBlock setError={setError}/>
                </div>
                
                <input defaultValue="Studija" ref={description} type="text" placeholder="Description"/>
                <div>
                    <input defaultValue="Vilnius"  ref={city} type="text" placeholder="City"/>
                </div>
                
                  <input defaultValue="250" ref={price} type="text" placeholder="Price"/>

                <button onClick={uploadPost}>Add offer</button>
            </div>
        </div>
    );
};

export default CreateApartmentOffer;