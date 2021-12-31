import faker from "faker";
import { Mappable } from "./Map";
// npm install faker
// npm install @types/faker
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `
            Username is ${this.name}
        `;
  }
}
