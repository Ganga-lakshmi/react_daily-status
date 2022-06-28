import { Link } from "react-router-dom";
const BlogList = (props) => {
    const blogs = props.blogs;
    const title= props.title;
    // const handleDelete= props.handleDelete; //these can directly available as blogs,title in function params BlogList = (blogs, title, handleDelete)
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((b_obj) => (
            <div className="blog-preview" key={b_obj.id}>
                <Link to ={`/blogs/${b_obj.id}`}> 
                
                <h3>{ b_obj.title }</h3>
                <p>dircted by {b_obj.author}</p>
                </Link>
            </div>
            ))}
        </div>
     );
}
 
export default BlogList;

//the data inside the body is taken , using parameters ids we move to body of each blog
/* //link is using for dynamic id , i cant capture the id into blog details(Blog details - undefined) */
