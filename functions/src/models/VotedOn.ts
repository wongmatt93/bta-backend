import { ObjectId } from "mongodb";

export default interface VotedOn {
  _id?: ObjectId;
  cityName: string;
  uid: string;
  favorite: boolean;
}
