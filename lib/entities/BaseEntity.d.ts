export declare class BaseEntity {
    id: string;
    createdOn: number;
    updatedOn: number;
    constructor(id?: string, createdOn?: number, updatedOn?: number);
}
export interface IBaseEntity {
    id?: string;
    createdOn?: number;
    updatedOn?: number;
}
