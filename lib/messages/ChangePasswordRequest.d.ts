export declare class ChangePasswordRequest {
    userId: string;
    oldPassword: string;
    newPassword: string;
    constructor(userId?: string, oldPassword?: string, newPassword?: string);
}
export interface IChangePasswordRequest {
    userId?: string;
    oldPassword?: string;
    newPassword?: string;
}
