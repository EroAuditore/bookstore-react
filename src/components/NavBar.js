import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
  </div>
);

export default NavBar;
