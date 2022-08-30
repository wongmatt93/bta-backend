import { ObjectId } from "mongodb";

export default interface SingleDaySchedule {
  _id?: ObjectId;
  breakfast: string;
  lunch: string;
  dinner: string;
  event1: string;
  event2: string;
  hotel?: string;
  date1: string;
  date2: string;
  uid: string;
  cityName: string;
}
