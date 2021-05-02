import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ActivityBookingGroup } from '../entities/ActivityBookingGroup';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfActivityBookingGroup extends EntitiesResponse {
    list: ActivityBookingGroup[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfActivityBookingGroup extends IEntitiesResponse {
    list?: ActivityBookingGroup[];
    code?: number;
    error?: string;
}
