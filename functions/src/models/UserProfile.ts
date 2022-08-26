import { ObjectId } from "mongodb";

export default interface UserProfile {
  id?: ObjectId;
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
}
