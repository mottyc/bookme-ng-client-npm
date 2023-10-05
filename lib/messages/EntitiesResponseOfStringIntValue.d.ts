import { StringIntValue } from '../common/StringIntValue';
import { EntitiesResponse } from '../messages/EntitiesResponse';
import { IEntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfStringIntValue extends EntitiesResponse {
    list: StringIntValue[];
    code: number;
    error: string;
}
export interface IEntitiesResponseOfStringIntValue extends IEntitiesResponse {
    list?: StringIntValue[];
    code?: number;
    error?: string;
}
