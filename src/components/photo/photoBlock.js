import PhotoBox from "./photoBox";
import React from "react";
import http from "../../plugins/http";
import {useRef, useState} from "react";

const PhotoBlock = ({photo, getError, setError}) => {
    const photoUrl = useRef()
    const [photos, setPhotos] = useState([])

    function addPhoto() {
        const photo = {
            photo: photoUrl.current.value,
            userId: localStorage.getItem("userId")
        }

        http.post("/upload-photo", photo ).then(data => {
            if (!data.success) {
                setError(data.message)
            } else {
                setError(null)
                setPhotos(data.photos)
            }
        })
    }

    return (
        <div>
            <PhotoBox photos={photos} setPhotos={setPhotos}/>
            <input ref={photoUrl} className="inp" type="text" placeholder="photo"/>
            <button onClick={addPhoto} className="btn">Add Photo</button>
        </div>
    );
};

export default PhotoBlock;