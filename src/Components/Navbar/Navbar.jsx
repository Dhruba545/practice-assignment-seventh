import "./Navbar.css";


const Navbar = () => {
    return (
        <div className="main">
            <div className="section bold">Recipe Calories</div>
            <div className="section flex">
                <small>Home</small>
                <small>Recipes</small>
                <small>About</small>
                <small>Search</small>
            </div>
            <div className="section right"><input className="rounded search" placeholder="Search"></input> <div>Logo</div></div>
        </div>
    );
};

export default Navbar;