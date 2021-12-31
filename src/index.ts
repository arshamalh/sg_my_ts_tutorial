import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

let user = new User();
let company = new Company();
let map = new Map("map");
map.addMarker(user);
map.addMarker(company);
