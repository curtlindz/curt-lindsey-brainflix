import '../components/VideoSummary.scss';

export default function Card({image, title, channel, changeActiveVideo, id}) {
    const clickHandler = () => {
        changeActiveVideo(id);
      };
    return (
    <div className="next-videos__card"  onClick={clickHandler}>
        <div className='next-videos__card--container'>
            <img src={image} className="next-videos__card--image" alt={title}/>
        </div>
        <div className="next-videos__card--details">
            <h3 className="next-videos__card--title">{title}</h3>
            <h4 className="next-videos__card--channel">{channel}</h4>
        </div>
    </div>
    );
}