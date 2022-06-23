const Home = () => {

    //add clicking buttons
    const handleClick = (e) =>{
        console.log('hello react users' ,e);
    }
    const handleAgain = (name , f) =>{
        console.log('hi ' +name, f.target  );
    }    
    return (  
        <div className="home">
            <h1>Home page</h1>

        <button onClick={handleClick}>click me</button>

        <button onClick={ (f) =>handleAgain('ganga' , f )}>your button</button>

        </div>
    );
}
 
export default Home;

//here e,f are event objects, event handlers(onclick, etc) can access to react events.