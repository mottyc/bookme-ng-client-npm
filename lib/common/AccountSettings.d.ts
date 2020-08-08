import { RecurrentTimeFrame } from '../common/RecurrentTimeFrame';
export declare class AccountSettings {
    defaultTimeFrames: RecurrentTimeFrame;
    retentionDays: number;
    constructor(defaultTimeFrames?: RecurrentTimeFrame, retentionDays?: number);
}
export interface IAccountSettings {
    defaultTimeFrames?: RecurrentTimeFrame;
    retentionDays?: number;
}
