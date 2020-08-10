import { RecurrentTimeFrame } from '../common/RecurrentTimeFrame';
export declare class AccountSettings {
    defaultActivities: RecurrentTimeFrame[];
    retentionDays: number;
    constructor(defaultActivities?: RecurrentTimeFrame[], retentionDays?: number);
}
export interface IAccountSettings {
    defaultActivities?: RecurrentTimeFrame[];
    retentionDays?: number;
}
