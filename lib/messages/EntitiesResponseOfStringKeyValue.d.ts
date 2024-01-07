import { EntitiesResponse } from '../messages/EntitiesResponse';
import { StringKeyValue } from '../common/StringKeyValue';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfStringKeyValue extends EntitiesResponse {
    list: StringKeyValue[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfStringKeyValue extends IEntitiesResponse {
    list?: StringKeyValue[];
    code?: number;
    error?: string;
}
