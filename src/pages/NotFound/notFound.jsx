import { NavLink } from "react-router-dom";

const NotFoundPage = () => (
  <div>

    <p>
      The page you’re looking for was removed, renamed, or got lost in space.
    </p>

    <NavLink
      to={"/"}
      title="Return to Home"
      aria-label="Return to Home page"
    >
      Return to Home
    </NavLink>
  </div>
);
export default NotFoundPage;
