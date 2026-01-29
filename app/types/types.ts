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

export type { DaySchedule, WeeklySchedule }
