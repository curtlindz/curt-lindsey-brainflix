export default function Comment({name, timestamp, comment}) {

    return (
    <div className="comment">
        <img/>
        <h3>{name}</h3>
        <h5>{new Date(timestamp).toLocaleDateString()}</h5>
        <h4>{comment}</h4>
    </div>
    );
}