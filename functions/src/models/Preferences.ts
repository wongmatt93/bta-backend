import { ObjectId } from "mongodb";

export default interface Preferences {
  _id?: ObjectId;
  uid: string;
  charming: boolean;
  foodie: boolean;
  nightlife: boolean;
  architecture: boolean;
  history: boolean;
  museums: boolean;
  performingArts: boolean;
  music: boolean;
  hipster: boolean;
  hippie: boolean;
  posh: boolean;
  familyFriendly: boolean;
  lgbtScene: boolean;
  diversity: boolean;
  beachTown: boolean;
  collegeTown: boolean;
  skiTown: boolean;
  outdoorsy: boolean;
  wineries: boolean;
  shopping: boolean;
}