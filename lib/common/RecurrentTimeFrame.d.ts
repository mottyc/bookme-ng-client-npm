import { DayOfWeekCode } from '../enums/DayOfWeekCode';
export declare class RecurrentTimeFrame {
    dayOfWeek: DayOfWeekCode;
    startTime: number;
    endTime: number;
    name: string;
    constructor(dayOfWeek?: DayOfWeekCode, startTime?: number, endTime?: number, name?: string);
}
export interface IRecurrentTimeFrame {
    dayOfWeek?: DayOfWeekCode;
    startTime?: number;
    endTime?: number;
    name?: string;
}
