import './UploadVideo.scss';
import upload from "../../assets/images/Upload-video-preview.jpg";
import { Link } from 'react-router-dom';
import { BASE_API_URL } from "../../const";
import { useState } from "react";
import axios from 'axios';

export default function UploadVideo() {

    const [video,setVideo] = useState({
        title: "",
        description: ""
    })
    function handle(e) {
        const newVideo={...video}
        newVideo[e.target.id] = e.target.value
        setVideo(newVideo)
        console.log(newVideo)
    }
    function submit(e) {
        e.preventDefault();
        axios.post(`${BASE_API_URL}videos?`, {
            title: video.title,
            description: video.description
        })
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            
            <div className="upload__content">
                <div className="upload__left">
                    <h5 className="upload__header">VIDEO THUMBNAIL</h5>
                    <img className="upload__image" src={upload} alt="upload"/>
                </div>
                <form onSubmit={(e)=>submit(e)} className="upload__form">
                    <div className="upload__form--inputs">
                        <h5 className="upload__form--header">TITLE YOUR VIDEO</h5>
                        <textarea onChange={(e) => handle(e)} id="title" className="upload__form--title" placeholder="Add a title to your video"></textarea>
                        <h5 className="upload__form--header">ADD A VIDEO DESCRIPTION</h5>
                        <textarea onChange={(e) => handle(e)} id="description" className="upload__form--description" placeholder="Add a description to your video"></textarea>
                    </div>
                    <div className="upload__form--buttons">
                        <button type= "submit" className="upload__form--publish" onClick={() => window.history.back()}>PUBLISH</button>
                        <Link to ={'/'}><button className="upload__form--cancel">CANCEL</button></Link>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
