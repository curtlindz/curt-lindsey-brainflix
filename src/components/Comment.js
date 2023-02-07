import './Comment.scss';

export default function Comment({name, timestamp, comment}) {

    return (
    <div className="comment">
        <img className="comment__avatar"/>
        <div className="comment__details">
            <div className="comment__details--header">
                <h3 className="comment__details--name">{name}</h3>
                <h5 className="comment__details--timestamp">{new Date(timestamp).toLocaleDateString()}</h5>
            </div>
            <h4 className="comment__details--comment">{comment}</h4>
        </div>

        
        
    </div>
    );
}