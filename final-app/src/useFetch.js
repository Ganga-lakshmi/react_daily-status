  import { useState, useEffect } from "react";
  
  
  const useFetch = (url) => {
    //first state(data use as different rype of resource)
         const [data, setData] = useState(null);
         const[isPending, setIsPending] = useState(true);
         const[error , setError] = useState(null);


     //use effect:runs for every render(for changing state also it updates the count)
    //we fetch the json, take response as res, and given to data then update the state with setBlog=data(json file is updated to setBlog function)
    useEffect( () =>{ 
        const abortCont = new AbortController();

        setTimeout(() =>{
             fetch(url , {signal:abortCont.signal})
            .then(res =>{
                 if(!res.ok) {
                    throw Error('could not fetch the data');
                }
                // console.log(res);
                return res.json();
            })
            .then(data =>{
                setIsPending(false);
                setData(data);
                
            })
            .catch( (err) =>{
                // console.log(err.message);
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                setIsPending(false);
                setError(err.message);
                }
            })
    
            },1000);
            return () =>abortCont.abort();

        },[url] );//showing dependency error []
    return {data, isPending, error} ;// useeffect array
    // the json data, server is loading , not responding 404
  }
   
  export default useFetch;

  //instead of 'http://localhost:8000/blogs'(hardcode) we use url , due to in future the url may changes and available to different others.
  //means putting the url in one point we can export to other files.

  //ses:useeffect cleanup
  //while moving route to another console proveds warnings, react state and use state , for that we provide abort fun