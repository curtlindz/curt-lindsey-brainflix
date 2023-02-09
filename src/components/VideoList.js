import React from "react";
import Card from "./VideoSummary"
import '../components/VideoList.scss';

function VideoList({videoData, activeVideoId, changeActiveVideo}) {
    return (
        <>
        <section className="next-videos">
            <h5 className="next-videos__header">NEXT VIDEOS</h5>
        {videoData
        .filter((video) => {
          return video.id !== activeVideoId;
        })
        .map((content) => (
            <Card 
            key={content.id} 
            id={content.id}
            changeActiveVideo={changeActiveVideo}
            image={content.image} 
            title={content.title} 
            channel={content.channel}/>
        ))}
        </section>
    </>
    );
}


export default VideoList;