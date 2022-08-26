import { ObjectId } from "mongodb";

export default interface Favorite {
  id?: ObjectId;
  cityId: string;
  uid: string;
}
