import { ObjectId } from "mongodb";

export default interface Favorite {
  id?: ObjectId;
  cityName: string;
  uid: string;
  favorite: boolean;
}
