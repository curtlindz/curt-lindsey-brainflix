import './UploadVideo.scss';
import upload from "../assets/images/Upload-video-preview.jpg";
import { Link } from 'react-router-dom';

export default function UploadVideo() {
    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            
            <div className="upload__content">
                <div className="upload__left">
                    <h5 className="upload__header">VIDEO THUMBNAIL</h5>
                    <img className="upload__image" src={upload} alt="upload-image"/>
                </div>
                <form className="upload__form">
                    <div className="upload__form--inputs">
                        <h5 className="upload__form--header">TITLE YOUR VIDEO</h5>
                        <textarea className="upload__form--title" defaultValue="Add a title to your video"></textarea>
                        <h5 className="upload__form--header">ADD A VIDEO DESCRIPTION</h5>
                        <textarea className="upload__form--description" defaultValue="Add a description to your video"></textarea>
                    </div>
                    <div className="upload__form--buttons">
                        <Link to ={'/'}><button className="upload__form--publish">PUBLISH</button></Link>
                        <Link to ={'/'}><button className="upload__form--cancel">CANCEL</button></Link>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
