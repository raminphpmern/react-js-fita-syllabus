import { Outlet, Link } from "react-router-dom";
import NavScrollExample from './Menu';
const Layout = () => {
  return (
    <>
        <NavScrollExample></NavScrollExample>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;