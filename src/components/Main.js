import { useState, useEffect } from "react";
import { BASE_API_URL, API_KEY } from "../const.js";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

import NavBar from "./NavBar";
import VideoList from "./Videos/VideoList.js";
import CurrentVideo from "./Current/CurrentVideo";
import CommentList from "./Comments/CommentList";
import CurrentVideoDetails from "./Current/CurrentVideoDetails";
import './Main.scss';

function Main() {

    const [currentVideo, setCurrentVideo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      axios
        .get(`${BASE_API_URL}videos/${id}?api_key=${API_KEY}`)
        .then((response) => {
          setCurrentVideo(response.data);
        })
        .catch((error) => console.log(error));
      }, [id]);
      
  
  if (currentVideo === null) {
    return <main>Loading...</main>;
  }

    return (
      <>
      <NavBar />
      <CurrentVideo currentVideo={currentVideo}/>
        <div className="main__desktop">
        
          <div className="main__desktop--container">
            <CurrentVideoDetails currentVideo={currentVideo}/>
            <CommentList 
            comments={currentVideo.comments}
            />
          </div>
          <div className="main__desktop--container">
            <VideoList
            activeVideoId={currentVideo.id}
            />
          </div>
        </div>
        
      </>
    );
  }
  
  export default Main;
  