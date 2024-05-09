import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-8 bg-gray-200">
      <nav className="flex justify-between">
        <Link to="/">Logo</Link>
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
