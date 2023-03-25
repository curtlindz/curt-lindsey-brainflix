import './CurrentVideoDetails.scss';
import avatar from "../../../assets/images/Mohan-muruge.jpg";
import likes from '../../../assets/images/likes.svg';
import views from '../../../assets/images/views.svg';

function CurrentVideoDetails({currentVideo}) {

    function timeSince(timestamp) {
        const now = Date.now();
        const elapsedTime = now - timestamp;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;
        const year = day * 365;
        const years = day * 730;

        if (elapsedTime < second) {
            return "Just now";
        } else if (elapsedTime < minute) {
            return Math.floor(elapsedTime / second) + " seconds ago";
        } else if (elapsedTime < hour) {
            return Math.floor(elapsedTime / minute) + " minutes ago";
        } else if (elapsedTime < day) {
            return Math.floor(elapsedTime / hour) + " hours ago";
        } else if (elapsedTime < month) {
            return Math.floor(elapsedTime / day) + " days ago";
        } else if (elapsedTime < year) {
            return Math.floor(elapsedTime / month) + " months ago";
        } else if (elapsedTime < years) {
            return Math.floor(elapsedTime / year) + " year ago";
        } else {
            return Math.floor(elapsedTime / years) + " years ago";
        }
    };

    return (
            <div className="current">
            <h1 className="current__title">{currentVideo.title}</h1>
            <div className="current__details">
                <div className="current__details--container">
                    <h3 className="current__details--channel">By {currentVideo.channel}</h3>
                    <h5 className="current__details--timestamp">{timeSince(currentVideo.timestamp)}</h5>
                </div>
                <div className="current__details--container">
                    
                    <div className="current__details--views">
                        <img src={views} alt="views"/>
                        <h5>{currentVideo.views}</h5>
                    </div>
                    <div className="current__details--likes">
                        <img src={likes} alt="likes"/>
                        <h5>{currentVideo.likes}</h5>
                    </div>
                    
                </div>
            </div>
            <h4 className="current__description">{currentVideo.description}</h4>
            {currentVideo.comments && (
                <h3 className="current__comments">{currentVideo.comments.length} Comments</h3>
            )}
            <form className="current__comment-field">
                <img className="current__comment-field--avatar" src={avatar} alt="avatar"/>
                <div className="current__comment-field--details">
                    <h5 className="current__comment-field--header">JOIN THE CONVERSATION</h5>
                    <div className="current__comment-field--container">
                        <textarea className="current__comment-field--form" placeholder="Add a new comment"></textarea>
                        <button type ="button" className="current__comment-field--button">COMMENT</button>
                    </div>
                </div>
            </form>
            
        </div>
    
    );
}

export default CurrentVideoDetails;