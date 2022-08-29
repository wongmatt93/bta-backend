import { ObjectId } from "mongodb";

export default interface Favorite {
  _id?: ObjectId;
  cityName: string;
  uid: string;
  favorite: boolean;
}
