import { DayOfWeekCode } from '../enums/DayOfWeekCode';
export declare class RecurrentTimeFrame {
    dayOfWeek: DayOfWeekCode;
    startTime: string;
    endTime: string;
    constructor(dayOfWeek?: DayOfWeekCode, startTime?: string, endTime?: string);
}
export interface IRecurrentTimeFrame {
    dayOfWeek?: DayOfWeekCode;
    startTime?: string;
    endTime?: string;
}
