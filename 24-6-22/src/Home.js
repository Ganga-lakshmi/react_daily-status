import {useState} from 'react';
import BlogList from './BlogList';
const Home = () => {
// ,setBlog
    const [blogs, setBlog] = useState([
        {title:'avengers' , author:'ganga' , body:'the union of..' , id:1},
        {title:'marvels' , author:'denny' , body:'the super power..' , id:2},
        {title:'captain' , author:'mali' , body:'strength of the hero..' , id:3}
    ]);
    //why delete blogis here, the bloglist is not available cannot perform access directly.
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog =>blog.id !==id);
        setBlog(newBlogs);
    }
    return(
        <div className='home'>
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}></BlogList>
            {/* reusing the bloglist components, this canbe used as searching something */}
            {/* <BlogList blogs={blogs.filter((obj)=> obj.author === 'ganga')} title="Gangas blogs!"/> */}

            
        </div>
    );
    
}
 
export default Home;

