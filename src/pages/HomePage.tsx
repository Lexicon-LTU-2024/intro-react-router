import { ReactElement } from "react";
import { Button } from "../components";

export function HomePage(): ReactElement {
  return (
    <main className="home-page">
      <h1 className="header">Welcome to the Avengers Initiative</h1>
      <div className="description">
        <p>
          We are a team of Earth's mightiest heroes, dedicated to protecting the world from the
          greatest threats. Join us on our journey to save the universe.
        </p>
        <Button>Assemble</Button>
      </div>
    </main>
  );
}
