import { ReactElement } from "react";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";

export function HomePage(): ReactElement {
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    navigate("/about");
  };

  return (
    <main className="home-page">
      <h1 className="header">Welcome to the Avengers Initiative</h1>
      <div className="description">
        <p>
          We are a team of Earth's mightiest heroes, dedicated to protecting the world from the
          greatest threats. Join us on our journey to save the universe.
        </p>
        <Button onClick={handleOnClick}>Assemble</Button>
      </div>
    </main>
  );
}
