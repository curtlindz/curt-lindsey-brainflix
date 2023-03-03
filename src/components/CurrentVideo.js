import '../components/CurrentVideo.scss';


function CurrentVideo({currentVideo}) {

    return (

        <video className="current__video" controls poster={currentVideo.image}><source src={currentVideo.image} type="video/webm" /></video>
    );
}

export default CurrentVideo;