import { ReactElement } from "react";
import { Button, EmployeeAvatar } from "../components";
import { employees } from "../data";

export function AboutPage(): ReactElement {
  return (
    <main className="about-page">
      <section className="about">
        <Button variant="secondary">About the Avengers</Button>
        <h1 className="header">Protecting the World, One Crisis at a Time</h1>
        <p>
          The Avengers are a team of Earth's mightiest heroes, assembled to protect the world from
          the greatest threats. Led by Captain America, our team includes Iron Man, Thor, Hulk,
          Black Widow, and Hawkeye, among others.
        </p>
      </section>
      <section className="employees">
        {employees.map((employee) => (
          <EmployeeAvatar key={employee.id} employee={employee} />
        ))}
      </section>
    </main>
  );
}
