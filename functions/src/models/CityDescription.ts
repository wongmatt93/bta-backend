import { ObjectId } from "mongodb";

export default interface CityDescription {
  _id?: ObjectId;
  cityId: string;
  cityDescription: string;
  knownFor: string[];
  photo: string;
}
