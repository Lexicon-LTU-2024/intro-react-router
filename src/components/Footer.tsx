import { ReactElement } from "react";

export function Footer(): ReactElement {
  return (
    <footer className="footer">
      <p>© 2024 Avengers Initiative. All rights reserved.</p>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Join</a>
      </div>
    </footer>
  );
}
