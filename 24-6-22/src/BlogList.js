const BlogList = (props) => {
    const blogs = props.blogs;
    const title= props.title;
    const handleDelete= props.handleDelete; //these can directly available as blogs,title in function params BlogList = (blogs, title, handleDelete)
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((obj) =>
            <div className='blog-preview' key={obj.id}>
                <h3>{obj.title}</h3>
                <p>dircted by {obj.author}</p>
                <button onClick={() => handleDelete(obj.id)}>delete</button>
            </div>
            )}
        </div>
     );
}
 
export default BlogList;