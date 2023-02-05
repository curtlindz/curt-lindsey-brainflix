import '../components/CurrentVideo.scss';
import avatar from "../assets/images/Mohan-muruge.jpg";
import Comment from './Comment';

export default function CurrentVideo({currentVideo}) {
    
    console.log(currentVideo.map(video => (
        {video.comments.map(comment => (
            {comment.name}
        ))}
    ))
    )

    return (
    <div className="current">
    <video className="current__video" controls poster={currentVideo.image}><source src={currentVideo.image} type="video/webm" /></video>
    <h1 className="current__title">{currentVideo.title}</h1>
    <h3>By {currentVideo.channel}</h3>
    <h5>{new Date(currentVideo.timestamp).toLocaleDateString()}</h5>
    <h5>{currentVideo.views}</h5>
    <h5>{currentVideo.likes}</h5>
    <h4 className="current__description">{currentVideo.description}</h4>
    <h3>{currentVideo.comments.length} Comments</h3>
    <h5>JOIN THE CONVERSATION</h5>
    <img className="current__avatar" src={avatar} alt="avatar"/>
    <form>
        <textarea></textarea>
        <button></button>
    </form>
    <Comment 
    name={currentVideo.comment.name}
    timestamp={currentVideo.comment.timestamp}
    comment={currentVideo.comment.coment}
    />
    </div>
    );
}