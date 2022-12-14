import { ObjectId } from "mongodb";
import SingleDaySchedule from "./SingleDaySchedule";

export default interface PlannedTrip {
  _id?: ObjectId;
  date1: string;
  date2: string;
  cityName: string;
  uid: string;
  cityPhoto: string;
  hotel: string | null;
  schedule: SingleDaySchedule[];
  photos: string[];
}
