import { Link } from "react-router-dom";
// import Twitter from "../Icons/Twitter"
// import Instagram from "../Icons/Instagram"
// import Facebook from "../Icons/Facebook"
import "./navbar.css";

export default function Navbar({ user, handleLogout }) {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.vippng.com/png/detail/449-4492383_american-revolution-clip-art-healthy-person-icon-png.png"
              width="75px"
              alt="healthy logo"
            />
          </Link>
        </div>

        {/* <div className="socials">
          <Twitter fill="var(--pure-white)" />
          <Instagram fill="var(--pure-white)" />
          <Facebook fill="var(--pure-white)" />
        </div> */}

        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/activity">Activity</Link>
          </li>
          <li>
            <Link to="/exercise">Exercise</Link>
          </li>
          <li>
            <Link to="/sleep">Sleep</Link>
          </li>
          <li>
            <Link to="/nutrition">Nutrition</Link>
          </li>
          {user?.email ? (
            <>
              <li>
                <span>{user.email}</span>
              </li>

              <li>
                <span onClick={handleLogout}>Logout</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
