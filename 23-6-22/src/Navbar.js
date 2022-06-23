const Navbar = () => {
    return (
            <nav className="navbar">
                <h1>The react application</h1>
                <div className="links">
                    <a href="/"> home</a>
                    <a href="/create" style={{
                        color:"blueviolet",
                        backgroundColor: 'rgba(241, 246, 247, 0.938)'

                    }}>New blog</a>
                </div>

            </nav>

      );
}
 
export default Navbar;