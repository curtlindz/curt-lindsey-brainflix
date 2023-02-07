import Comment from "./Comment"

function CommentList({comments}) {

    console.log(comments);
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