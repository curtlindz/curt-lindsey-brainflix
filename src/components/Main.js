import { useState } from "react";
import videos from '../data/video-details.json'

import VideoList from "./VideoList";
import CurrentVideo from "./CurrentVideo";

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


    const addCard = (title, content) => {
      const newVideo = {
        "id": "99478bed-6428-49ed-8eaa-f245a5414336",
        "title": "Cruising Destination Ideas",
        "channel": "Timothy Austin",
        "image": "https://i.imgur.com/DDJNZNw.jpg",
        "description": "Do you dream of sailing in to the sunset without a care in the world? Going on a cruise can be the perfect way to make this dream come true. If you’re considering taking your very first cruise, think about the various advantages. A cruise vacation offers great value as almost everything is included, from accommodation and food to entertainment and transfers.",
        "views": "29,984",
        "likes": "2,552",
        "duration": "5:58",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": 1631892222000,
        "comments": [
          {
            "id": "6ff4314c-acde-4c91-a753-95cb7a366ee9",
            "name": "Jesse Cruz",
            "comment": "There’s no place quite like the open ocean. Wind in your sails. The cool mist is perfect to wake you up in the morning and lull you to sleep in the evening. What an experience.",
            "likes": 0,
            "timestamp": 1632227521000
          },
          {
            "id": "894b2ef9-640e-4d55-95ac-c65cfc39d693",
            "name": "Tristan Carter",
            "comment": "Drifting along the coast in a city on the water. Such incredible destinations to see all around the world.",
            "likes": 1,
            "timestamp": 1631976360000
          }
        ],
      };
      const newVideoData = [...videoData, newVideo];
      setVideoData(newVideoData);
    };
  
    return (
      <>
        <CurrentVideo currentVideo={currentVideo}/>
        <VideoList
          videoData={videoData}
          activeVideoId={currentVideo.id}
          changeActiveVideo={changeVideo}
        />
      </>
    );
  }
  
  export default Main;
  