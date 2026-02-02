type DaySchedule = {
  enabled: boolean
  from: string
  to: string
}

type WeeklySchedule = {
  MONDAY: DaySchedule
  TUESDAY: DaySchedule
  WEDNESDAY: DaySchedule
  THURSDAY: DaySchedule
  FRIDAY: DaySchedule
  SATURDAY: DaySchedule
  SUNDAY: DaySchedule
}

type pharmacyTab = {
  icon: string,
  title: string,
  path: string
}
export type { DaySchedule, WeeklySchedule, pharmacyTab }



