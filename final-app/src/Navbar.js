import { Link } from "react-router-dom";

const Navbar = () => {
    return (
            <nav className="navbar">
                <h1>The react application</h1>
                <div className="links">
                    <Link to ="/"> home</Link>
                    <Link to="/create" style={{
                        color:"blueviolet",
                        backgroundColor: 'rgba(241, 246, 247, 0.938)'

                    }}>New blog</Link>
                </div>

            </nav>

      );
}
 
export default Navbar;