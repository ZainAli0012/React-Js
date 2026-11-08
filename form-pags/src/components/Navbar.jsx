import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white px-8 py-5 grid grid-cols-3 items-center">
      <h2 className="text-2xl font-bold">
        Form Page
      </h2>

      <div className="flex items-center gap-6">
    
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
              
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
              
          }
        >
          Login
        </NavLink>
      </div>

      <div></div>
    </nav>
  );
};

export default Navbar;