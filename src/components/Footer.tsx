import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Footer(): ReactElement {
  return (
    <footer className="footer">
      <p>© 2024 Avengers Initiative. All rights reserved.</p>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/join-us">Join</Link>

        {/* <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Join</a> */}
      </div>
    </footer>
  );
}
