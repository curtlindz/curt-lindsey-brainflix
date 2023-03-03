import React from "react";
import Card from "./VideoSummary"
import '../components/VideoList.scss';
import { Link } from 'react-router-dom';

function VideoList({videoData, activeVideoId, changeActiveVideo}) {

    console.log(videoData);
    return (
        <>
        <section className="next-videos">
            <h5 className="next-videos__header">NEXT VIDEOS</h5>
        {videoData
        .filter((video) => {
            return video.id !== activeVideoId;
        })
        .map((content) => (
            <Link to={content.id} key={content.id}>
                <Card 
                key={content.id} 
                id={content.id}
                changeActiveVideo={changeActiveVideo}
                image={content.image} 
                title={content.title} 
                channel={content.channel}/>
            </Link>
            
        ))}
        </section>
    </>
    );
}


export default VideoList;