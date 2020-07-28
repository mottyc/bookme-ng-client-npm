export declare class BaseEntity {
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    constructor(id?: string, docType?: string, createdOn?: number, updatedOn?: number);
}
export interface IBaseEntity {
    id?: string;
    _type?: string;
    createdOn?: number;
    updatedOn?: number;
}
