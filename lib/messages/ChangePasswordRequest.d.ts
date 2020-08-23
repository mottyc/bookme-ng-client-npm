export declare class ChangePasswordRequest {
    userEmail: string;
    oldPassword: string;
    newPassword: string;
    constructor(userEmail?: string, oldPassword?: string, newPassword?: string);
}
export interface IChangePasswordRequest {
    userEmail?: string;
    oldPassword?: string;
    newPassword?: string;
}
