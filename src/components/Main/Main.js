import { useState, useEffect } from "react";
import { BASE_API_URL } from "../../const";
import axios from 'axios';
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import VideoList from "../Videos/VideoList/VideoList.js";
import CurrentVideo from "../Current/CurrentVideo/CurrentVideo";
import CommentList from "../Comments/CommentList/CommentList";
import CurrentVideoDetails from "../Current/CurrentVideoDetails/CurrentVideoDetails";
import './Main.scss';

function Main() {

    const [currentVideo, setCurrentVideo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      axios
        .get(`${BASE_API_URL}videos/${id}?`)
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
  