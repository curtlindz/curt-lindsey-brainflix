import { useState } from "react";
import videosDetails from '../data/video-details.json'
import videos from '../data/videos.json'

import VideoList from "./VideoList";
import CurrentVideo from "./CurrentVideo";
import CommentList from "./CommentList";
import CurrentVideoDetails from "./CurrentVideoDetails";
import './Main.scss';

function Main() {
    const videoDetailsList = videosDetails;
    const videoList = videos;

    const [videoData, setVideoData] = useState(videoList);
    const [currentVideo, setCurrentVideo] = useState(videoDetailsList[0]);
  
    const changeVideo = (id) => {
      const selectedVideo = videoDetailsList.find((video) => {
        return video.id === id;
      });
  
      setCurrentVideo(selectedVideo);
    };


    const updateCard = () => {
      const newVideoData = [...videoData];
      setVideoData(newVideoData);
    };

    const commentArray = currentVideo.comments.map(comment => {
      return {
          name: comment.name,
          comment: comment.comment,
          timestamp: comment.timestamp
      };
  });
  
    return (
      <>
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
  