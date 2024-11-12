import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="nav">
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
export default Navigation;