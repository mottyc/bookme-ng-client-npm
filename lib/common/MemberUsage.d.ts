export declare class MemberUsage {
    id: string;
    name: string;
    total: number;
    sun: number;
    mon: number;
    tue: number;
    wed: number;
    thu: number;
    fri: number;
    sat: number;
    absences: number;
    accidents: number;
    constructor(id?: string, name?: string, total?: number, sun?: number, mon?: number, tue?: number, wed?: number, thu?: number, fri?: number, sat?: number, absences?: number, accidents?: number);
}
export interface IMemberUsage {
    id?: string;
    name?: string;
    total?: number;
    sun?: number;
    mon?: number;
    tue?: number;
    wed?: number;
    thu?: number;
    fri?: number;
    sat?: number;
    absences?: number;
    accidents?: number;
}
