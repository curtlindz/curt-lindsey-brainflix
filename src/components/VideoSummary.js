import '../components/VideoSummary.scss';

export default function Card({image, title, channel, changeActiveVideo, id}) {
    const clickHandler = () => {
        changeActiveVideo(id);
      };
    return (
    <div className="next-videos__card"  onClick={clickHandler}>
        <img src={image} className="next-videos__card--image" alt={title}/>
        <div className="next-videos__card--details">
            <h3 className="next-videos__card--title">{title}</h3>
            <h4 className="next-videos__card--channel">{channel}</h4>
        </div>
    </div>
    );
}