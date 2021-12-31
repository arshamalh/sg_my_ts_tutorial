import faker from "faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `
    <div>
        <h3>Company name is ${this.companyName}</h3>
        <h5>CatchPhrase is ${this.catchPhrase}</h5>
    </div>`;
  }
}
