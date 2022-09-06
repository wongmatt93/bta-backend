import { ObjectId } from "mongodb";
import Preferences from "./Preferences";
import VotedOn from "./VotedOn";

export default interface UserProfile {
  id?: ObjectId;
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  preferences?: Preferences;
  votedOn: VotedOn[];
}
