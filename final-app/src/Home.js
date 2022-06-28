// import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
// usestate hook is used to allows to track the state in function component. blogs is current state and setblog is function to update the state

const {data:blogs,  isPending, error} = useFetch('http://localhost:8000/blogs');
    return(
        <div className='home'>
            {error && <div>{ error }</div>}
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" ></BlogList>}
            {/* jsx inside logical and */}
        </div>
    );
    
}
 
export default Home;









// note: blod.id === id , while clicking if the id is equal to blog.id , then the filtered array is stored in new blogs, it is setted.
// if blog.id !==id, this flase condtion stores the filtered array (which id is not equal to the blogid )
/* reusing the bloglist components, this canbe used as searching something */
            /* <BlogList blogs={blogs.filter((obj)=> obj.author === 'ganga')} title="Gangas blogs!"/> */

// useeffect: it runs the function every render of the components, first it loads,, and,, when th state changes.
// useeffect second arg is dependency (which is used to decide on when it renders,--> we can add dependencies in [] this, while clicking the name only useeffect runs, remaining renders it wont work,)
 

//why delete blogis here, the bloglist is not available cannot perform access directly.
// const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog =>blog.id !==id);
//     setBlog(newBlogs);
// }
//---JSON FILE: it is like fake database provided to our react app, we are given data to the json file , we give usestate=null so no data is given, wusing a logical and operation blogs are null so it wont execute the next opetion we didnot get any error
//npx json-server --watch data/db.json --port 8000


//isPending : while fetching the data some servers may take time to load, for that we checks the data is fetched then setpending = false then it wont generate any loading.. msg or else it gives.
//settimeout=1sec waits our loading server , then the data is fecthed.

// //---HANDLING FETCHING ERRORS---
// catch will get the network errors
// WE use res(response) to throuw the error to browser. then loading.. state is visible so when error occurred 
//loadingis stopped, for that setpending=false. final conditional error is written.
