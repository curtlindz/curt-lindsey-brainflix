import '../components/CurrentVideo.scss';
import avatar from "../assets/images/Mohan-muruge.jpg";
import likes from '../assets/images/likes.svg';
import views from '../assets/images/views.svg';

function CurrentVideo({currentVideo}) {



    return (
    <div className="current">
        <video className="current__video" controls poster={currentVideo.image}><source src={currentVideo.image} type="video/webm" /></video>
        <h1 className="current__title">{currentVideo.title}</h1>
        <div className="current__details">
            <div className="current__details--container">
                <h3 className="current__details--channel">By {currentVideo.channel}</h3>
                <h5 className="current__details--timestamp">{new Date(currentVideo.timestamp).toLocaleDateString()}</h5>
            </div>
            <div className="current__details--container">
                <div className="current__details--views">
                    <img src={likes} alt="likes"/>
                    <h5>{currentVideo.views}</h5>
                </div>
                <div className="current__details--likes">
                    <img src={views} alt="views"/>
                    <h5>{currentVideo.likes}</h5>
                </div>
                
            </div>
        </div>
        <h4 className="current__description">{currentVideo.description}</h4>
        <h3 className="current__comments">{currentVideo.comments.length} Comments</h3>
        <form className="current__comment-field">
            <img className="current__comment-field--avatar" src={avatar} alt="avatar"/>
            <div className="current__comment-field--details">
                <h5 className="current__comment-field--header">JOIN THE CONVERSATION</h5>
                <textarea className="current__comment-field--form" defaultValue="Add a new comment"></textarea>
                <button className="current__comment-field--button">COMMENT</button>
            </div>
        </form>
        
    </div>
    );
}

export default CurrentVideo;