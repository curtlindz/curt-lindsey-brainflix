import '../components/CurrentVideo.scss';
import avatar from "../assets/images/Mohan-muruge.jpg";
import likes from '../assets/images/likes.svg';
import views from '../assets/images/views.svg';

function CurrentVideo({currentVideo}) {

    return (

        <video className="current__video" controls poster={currentVideo.image}><source src={currentVideo.image} type="video/webm" /></video>
    );
}

export default CurrentVideo;