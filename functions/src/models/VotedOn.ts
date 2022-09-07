import { ObjectId } from "mongodb";

export default interface VotedOn {
  _id?: ObjectId;
  cityName: string;
  cityId: string;
  favorite: boolean;
  photo: string;
}
