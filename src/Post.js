const Post = ({title = 'Untitled', body = 'Empty body'}) => {

    return (
        <article>
            <h1>{title}</h1>
            <p>{body}</p>
        </article>
    )
}

export default Post