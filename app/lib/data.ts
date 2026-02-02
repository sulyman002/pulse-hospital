import { WeeklySchedule } from "../types/types";

export const tabs = [
  { name: "Primary information", path: "/setup-pharmacy/primary-information" },
  { name: "Locations", path: "/setup-pharmacy/locations" },
  { name: "Special Drug availability", path: "/setup-pharmacy/special-drug" },
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

export const people = [
  { id: 1, name: 'Durant' },
  { id: 2, name: 'Curry' },
  { id: 3, name: 'LeBron' },
]