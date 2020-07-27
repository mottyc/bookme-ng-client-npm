import { DayOfWeekCode } from '../enums/DayOfWeekCode';
export interface RecurrentTimeFrame {
    dayOfWeek?: DayOfWeekCode;
    startTime?: string;
    endTime?: string;
}
