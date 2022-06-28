import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;



//ses-22: exact match routes
//here we add another route for create page, but / == /create -> rendering homepage only
//means / in part of '/create' so that same blogs page run for same paths
//for specific exact path ='/' so when only slash enters it directs to homepage.

//adding router links

//route parameters:
//these are come from the parameters of components
//the id passesd as parameter then printed to browser.<Route path="/create">
            