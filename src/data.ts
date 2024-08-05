import { IEmployee } from "./interfaces";
import captainAmerica from "./assets/captain-america.png";
import hulk from "./assets/hulk.png";
import ironman from "./assets/ironman.png";
import thor from "./assets/thor.png";

export const images = {
  captainAmerica,
  hulk,
  ironman,
  thor,
};

export const employees: IEmployee[] = [
  {
    id: "1",
    image: images.captainAmerica,
    name: "Captain America",
    title: ["Team Leader"],
  },
  {
    id: "2",
    image: images.ironman,
    name: "Iron Man",
    title: ["Genius", "Billionaire", "Playboy", "Philanthropist"],
  },
  {
    id: "3",
    image: images.thor,
    name: "Thor",
    title: ["God of Thunder"],
  },
  {
    id: "4",
    image: images.hulk,
    name: "Hulk",
    title: ["Strongest Avenger"],
  },
];
