import { useState, useEffect } from "react";
import { BASE_API_URL, API_KEY } from "../const.js";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

import NavBar from "./NavBar";
import VideoList from "./VideoList";
import CurrentVideo from "./CurrentVideo";
import CommentList from "./CommentList";
import CurrentVideoDetails from "./CurrentVideoDetails";
import './Main.scss';

function Main() {

    const [videoData, setVideoData] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`${BASE_API_URL}videos?api_key=${API_KEY}`)
          .then((response) => {
              setVideoData(response.data);
              setCurrentVideo(response.data[0]);
            })
            .catch((error) => console.log(error));
          }, []);



          useEffect(() => {
              axios
                .get(`${BASE_API_URL}videos/${id}?api_key=${API_KEY}`)
                .then((response) => {
                  setCurrentVideo(response.data[0]);
                })
                .catch((error) => console.log(error));
              }, []);


          console.log(currentVideo);
          console.log(videoData);


    const changeVideo = (id) => {
      const selectedVideo = videoData.find((video) => {
        return video.id === id;
      });
  
      setCurrentVideo(selectedVideo);
    };


    const updateCard = () => {
      const newVideoData = [...videoData];
      setVideoData(newVideoData);
    };

  const commentArray = [];
  // currentVideo.comments.map(comment => {
  //     return {
  //         name: comment.name,
  //         comment: comment.comment,
  //         timestamp: comment.timestamp
  //     };
  // });
  
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
            comments={commentArray}
            />
          </div>
          <div className="main__desktop--container">
            <VideoList
            videoData={videoData}
            activeVideoId={currentVideo.id}
            changeActiveVideo={changeVideo}
            />
          </div>
        </div>
        
      </>
    );
  }
  
  export default Main;
  