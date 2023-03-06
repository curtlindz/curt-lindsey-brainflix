import { useState, useEffect } from "react";
import Card from "./VideoSummary"
import './VideoList.scss';
import { BASE_API_URL, API_KEY } from "../../const";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


function VideoList({activeVideoId}) {

    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        axios
          .get(`${BASE_API_URL}videos?api_key=${API_KEY}`)
          .then((response) => {
              setVideoData(response.data);
            })
            .catch((error) => console.log(error));
          }, []);

    return (
        <>
        <section className="next-videos">
            <h5 className="next-videos__header">NEXT VIDEOS</h5>
        {videoData
        .filter((video) => {
            return video.id !== activeVideoId;
        })
        .map((content) => (
            <Link to={`/videoplayer/${content.id}`} key={content.id} className="next-videos__link">
                <Card 
                key={content.id} 
                id={content.id}
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