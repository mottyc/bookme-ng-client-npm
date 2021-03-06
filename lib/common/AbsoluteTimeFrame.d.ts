export declare class AbsoluteTimeFrame {
    name: string;
    startTime: string;
    endTime: string;
    active: boolean;
    constructor(name?: string, startTime?: string, endTime?: string, active?: boolean);
}
export interface IAbsoluteTimeFrame {
    name?: string;
    startTime?: string;
    endTime?: string;
    active?: boolean;
}
