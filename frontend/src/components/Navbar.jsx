import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: '10px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;