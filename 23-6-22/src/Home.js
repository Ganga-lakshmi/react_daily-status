import React from 'react';

const Home = () => {

    //add clicking buttons
    const handleClick = (e) =>{
        console.log('hello react users' ,e);
    }
    // function components, properties(props)
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
    // class Classcom extends React.Component {
    //     render() {
    //       return <h1>Hello, {this.props.name}</h1>;
    //     }
    //   } 
    
      

    return (  
        <div className="home">
            <h1>Home page</h1>
            {/* rendering componenets more times */}
        <div >
            <Welcome name="sara"></Welcome>
            <Welcome name="ganga"></Welcome>
            <Welcome name="jyo"></Welcome>
        
        </div>

        <button onClick={handleClick}>click me</button>

        </div>
    );
}
 
export default Home;

//here e,f are event objects, event handlers(onclick, etc) can access to react events.
//target gives the specified tag. or line