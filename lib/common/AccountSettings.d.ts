import { RecurrentActivity } from '../common/RecurrentActivity';
export declare class AccountSettings {
    defaultActivities: RecurrentActivity[];
    retentionDays: number;
    constructor(defaultActivities?: RecurrentActivity[], retentionDays?: number);
}
export interface IAccountSettings {
    defaultActivities?: RecurrentActivity[];
    retentionDays?: number;
}
