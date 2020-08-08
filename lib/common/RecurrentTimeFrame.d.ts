import { DayOfWeekCode } from '../enums/DayOfWeekCode';
export declare class RecurrentTimeFrame {
    dayOfWeek: DayOfWeekCode;
    startTime: number;
    endTime: number;
    constructor(dayOfWeek?: DayOfWeekCode, startTime?: number, endTime?: number);
}
export interface IRecurrentTimeFrame {
    dayOfWeek?: DayOfWeekCode;
    startTime?: number;
    endTime?: number;
}
