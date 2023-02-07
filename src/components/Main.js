import { useState } from "react";
import videos from '../data/video-details.json'

import VideoList from "./VideoList";
import CurrentVideo from "./CurrentVideo";
import CommentList from "./CommentList";

function Main() {
    const videoList = videos;

    const [videoData, setVideoData] = useState(videoList);
    const [currentVideo, setCurrentVideo] = useState(videoList[0]);
  
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
        <CommentList 
        comments={commentArray}
        />
        <VideoList
          videoData={videoData}
          activeVideoId={currentVideo.id}
          changeActiveVideo={changeVideo}
        />
      </>
    );
  }
  
  export default Main;
  