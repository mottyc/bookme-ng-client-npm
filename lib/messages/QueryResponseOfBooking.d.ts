import { QueryResponse } from '../messages/QueryResponse';
import { Booking } from '../entities/Booking';
import { IQueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfBooking extends QueryResponse {
    list: Booking[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
export interface IQueryResponseOfBooking extends IQueryResponse {
    list?: Booking[];
    code?: number;
    error?: string;
    page?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
    queryDef?: string;
    docType?: string;
}
