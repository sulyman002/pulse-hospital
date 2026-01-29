import { WeeklySchedule } from "../types/types";

export const tabs = [
  { name: "Primary information", path: "/setup/primary-information" },
  { name: "Services", path: "/setup/services" },
  { name: "Locations", path: "/setup/locations" },
];


export const workingSchedule: WeeklySchedule = {
  MONDAY: { enabled: true, from: "9:00 AM", to: "4:00 PM" },
  TUESDAY: { enabled: true, from: "9:00 AM", to: "4:00 PM" },
  WEDNESDAY: { enabled: true, from: "9:00 AM", to: "4:00 PM" },
  THURSDAY: { enabled: true, from: "9:00 AM", to: "4:00 PM" },
  FRIDAY: { enabled: true, from: "9:00 AM", to: "4:00 PM" },
  SATURDAY: { enabled: true, from: "9:00 AM", to: "4:00 PM" },
  SUNDAY: { enabled: true, from: "9:00 AM", to: "4:00 PM" },
}