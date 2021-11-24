import { Notification } from '../entities/Notification';
import { QueryResponse } from '../messages/QueryResponse';
import { IQueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfNotification extends QueryResponse {
    list: Notification[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
export interface IQueryResponseOfNotification extends IQueryResponse {
    list?: Notification[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
