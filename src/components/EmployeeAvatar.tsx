import { ReactElement } from "react";
import { IEmployee } from "../interfaces";

interface IEmployeeAvatarProps {
  employee: IEmployee;
}

export function EmployeeAvatar({ employee }: IEmployeeAvatarProps): ReactElement {
  return (
    <article className="employee-avatar">
      <figure className="figure">
        <img src={employee.image} alt={employee.name} className="image" />
      </figure>
      <p className="name">{employee.name}</p>
      <p className="title">{employee.title.join(", ")}</p>
    </article>
  );
}
