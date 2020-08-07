import { TimeUnitCode } from '../enums/TimeUnitCode';
export declare class UserBookingGroupRequest {
    from: number;
    to: number;
    groupBy: TimeUnitCode;
    constructor(from?: number, to?: number, groupBy?: TimeUnitCode);
}
export interface IUserBookingGroupRequest {
    from?: number;
    to?: number;
    groupBy?: TimeUnitCode;
}
