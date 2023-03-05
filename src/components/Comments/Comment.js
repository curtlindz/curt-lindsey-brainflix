import './Comment.scss';

export default function Comment({name, timestamp, comment}) {

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
    <div className="comment">
        <img className="comment__avatar"/>
        <div className="comment__details">
            <div className="comment__details--header">
                <h3 className="comment__details--name">{name}</h3>
                <h5 className="comment__details--timestamp">{timeSince(timestamp)}</h5>
            </div>
            <h4 className="comment__details--comment">{comment}</h4>
        </div>
    </div>
    );
}