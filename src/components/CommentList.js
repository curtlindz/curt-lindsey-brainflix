import Comment from "./Comment";
import './CommentList.scss';

function CommentList({comments}) {

    return (
        <>
        <section className="comments">
        {comments.map((content) => (
            <Comment 
            key={content.timestamp}
            name={content.name}
            timestamp={content.timestamp}
            comment={content.comment}
            />
            ))}
        </section>
    </>
    );
}


export default CommentList;