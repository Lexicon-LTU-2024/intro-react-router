import { FormEventHandler, ReactElement } from "react";
import { Button } from "../components";

export function JoinUsPage(): ReactElement {
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  
  return (
    <main className="join-us-page">
      <section className="application">
        <h2>Join the Avengers</h2>
        <p className="info">
          Have what it takes to be an Avenger? Fill out the form below and we'll get back to you as
          soon as possible.
        </p>
        <form className="form" onSubmit={handleOnSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={4} placeholder="Why do you want to join the Avengers?"></textarea>
          <div className="actions">
            <Button type="submit">Apply</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
