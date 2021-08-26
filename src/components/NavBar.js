import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="panel-bg">
    <div className="panel-links">
      <span className="Bookstore-CMS">Bookstore CMS</span>
      <div className="panel-links-nav">
        <Link className="BOOKS" to="/">
          Books
        </Link>
        <Link className="CATEGORIES" to="/categories">
          Categories
        </Link>
      </div>
    </div>

    <div className="Oval">
      <i className="fas fa-user Mask"> </i>
    </div>
  </div>
);

export default NavBar;
