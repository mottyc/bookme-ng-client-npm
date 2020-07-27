import { Booking } from '../entities/Booking';
import { QueryResponse } from '../messages/QueryResponse';
export interface QueryResponseOfBooking extends QueryResponse {
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
