import { NavLink } from 'react-router-dom';
import '../App.css';

function Navigation() {
  return (
    <nav>
      <NavLink to="/html">HTML</NavLink>
      <NavLink to="/css">CSS</NavLink>
    </nav>
  );
}

export default Navigation;
