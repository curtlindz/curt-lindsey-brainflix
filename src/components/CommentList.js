import Comment from "./Comment"

function CommentList({comments}) {
    return (
        <>
        <section className="comments">
        {comments.map((content) => (
            <Comment 
            key={content.id} 
            id={content.id}
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