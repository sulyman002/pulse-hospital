import path from "path";
import { listBoxSort, PharmacistData, pharmacyTab, WeeklySchedule } from "../types/types";

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

export const pharmacyDashboardTabs: pharmacyTab[] = [
  {
    icon: "ShoppingBag", title: "Home", path: "/pharmacy-dashboard/home"
  },
  {
    icon: "User", title: "Pharmacists", path: "/pharmacy-dashboard/pharmacists"
  },
  {
    icon: "Mail", title: "Orders",   path: "/pharmacy-dashboard/orders"
  },
  {
    icon: "CirclePile", title: "Inventory", path: "/pharmacy-dashboard/inventory"
  },
  {
    icon: "Settings", title: "Settings", path: "/pharmacy-dashboard/settings"
  }
] 

export const pharmacistList: PharmacistData[] = [
  {
    id: 1,
    name: "John Doe",
    cardImage: "/prof1.png"},
    {
      id: 2, 
      name: "Jane Smith",
      cardImage: "/prof2.png"
    },
    {
      id: 3,
      name: "Michael Johnson",
      cardImage: "/prof3.png"
    },
    {
      id: 4,
      name: "Sarah Williams",
      cardImage: "/prof4.png"
    },
    {
      id: 5,
      name: "David Brown",
      cardImage: "/prof5.png"
    },
    {
      id: 6,
      name: "Emily Davis",
      cardImage: "/prof6.png"
    },
    {
      id: 7,
      name: "Daniel Wilson",
      cardImage: "/prof7.png"
    },
    {
      id: 8,
      name: "Olivia Martinez",
      cardImage: "/prof8.png"
    }
]

export const listboxSort: listBoxSort[] = [
  { id: 1, name: "Sort by name" },
  { id: 2, name: "Sort by date" },
  { id: 3, name: "Sort by role" },
]