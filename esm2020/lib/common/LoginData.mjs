/*
 *  Login data (returned by the API after successful login)
*/
export class LoginData {
    constructor(accessToken, userId, accountId, accountRole, memberStatus, userName, userEmail, userType, userStatus, changePassword, messages) {
        this.accessToken = accessToken;
        this.userId = userId;
        this.accountId = accountId;
        this.accountRole = accountRole;
        this.memberStatus = memberStatus;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userType = userType;
        this.userStatus = userStatus;
        this.changePassword = changePassword;
        this.messages = messages;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5EYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm9va21lLWxpYi9zcmMvbGliL2NvbW1vbi9Mb2dpbkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7O0VBRUU7QUFDRixNQUFNLE9BQU8sU0FBUztJQXlEbEIsWUFBWSxXQUFvQixFQUFFLE1BQWUsRUFBRSxTQUFrQixFQUFFLFdBQTZCLEVBQUUsWUFBK0IsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsUUFBdUIsRUFBRSxVQUEyQixFQUFFLGNBQXdCLEVBQUUsUUFBbUI7UUFDN1EsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFZLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFPLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFVLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFZLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFhLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFVLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFXLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFlLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFTLENBQUM7SUFDOUIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlclR5cGVDb2RlJztcbmltcG9ydCB7IFVzZXJTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlclN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFJvbGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFJvbGVDb2RlJztcbmltcG9ydCB7IE1lbWJlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9NZW1iZXJTdGF0dXNDb2RlJztcblxuLyogXG4gKiAgTG9naW4gZGF0YSAocmV0dXJuZWQgYnkgdGhlIEFQSSBhZnRlciBzdWNjZXNzZnVsIGxvZ2luKVxuKi9cbmV4cG9ydCBjbGFzcyBMb2dpbkRhdGEge1xuIFxuICAgIC8vIEFjY2VzcyB0b2tlbiB0byB1c2UgKGZvciB0aGUgZGVmYXVsdCBhY2NvdW50KSBcbiAgICBcbiAgICBwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBDdXJyZW50IGFjY291bnQgaWQgYW5kIHJvbGUgXG4gICAgXG4gICAgcHVibGljIGFjY291bnRSb2xlOiBBY2NvdW50Um9sZUNvZGU7XG4gICAgXG4gXG4gICAgLy8gTWVtYmVyIHN0YXR1czogVU5ERUZJTkVEIHwgUEVORElORyB8IEFDVElWRSB8IEZST1pFTiBcbiAgICBcbiAgICBwdWJsaWMgbWVtYmVyU3RhdHVzOiBNZW1iZXJTdGF0dXNDb2RlO1xuICAgIFxuIFxuICAgIC8vIFVzZXIgbmFtZSBcbiAgICBcbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIFxuICAgIHB1YmxpYyB1c2VyRW1haWw6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBVc2VyIHR5cGUgXG4gICAgXG4gICAgcHVibGljIHVzZXJUeXBlOiBVc2VyVHlwZUNvZGU7XG4gICAgXG4gXG4gICAgLy8gVXNlciBzdGF0dXMgXG4gICAgXG4gICAgcHVibGljIHVzZXJTdGF0dXM6IFVzZXJTdGF0dXNDb2RlO1xuICAgIFxuIFxuICAgIC8vIFVzZXIgbXVzdCBjaGFuZ2UgcGFzc3dvcmQgb24gbmV4dCBsb2dpbiBcbiAgICBcbiAgICBwdWJsaWMgY2hhbmdlUGFzc3dvcmQ6IGJvb2xlYW47XG4gICAgXG4gXG4gICAgLy8gTWVzc2FnZXMgdG8gc2hvdyB0byB0aGUgdXNlciBvbiBsb2dpbiBcbiAgICBcbiAgICBwdWJsaWMgbWVzc2FnZXM6IHN0cmluZ1tdO1xuICAgIFxuIFxuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuPzogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZywgYWNjb3VudFJvbGU/OiBBY2NvdW50Um9sZUNvZGUsIG1lbWJlclN0YXR1cz86IE1lbWJlclN0YXR1c0NvZGUsIHVzZXJOYW1lPzogc3RyaW5nLCB1c2VyRW1haWw/OiBzdHJpbmcsIHVzZXJUeXBlPzogVXNlclR5cGVDb2RlLCB1c2VyU3RhdHVzPzogVXNlclN0YXR1c0NvZGUsIGNoYW5nZVBhc3N3b3JkPzogYm9vbGVhbiwgbWVzc2FnZXM/OiBzdHJpbmdbXSkgeyBcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuITtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQhO1xuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZCE7XG4gICAgICAgIHRoaXMuYWNjb3VudFJvbGUgPSBhY2NvdW50Um9sZSE7XG4gICAgICAgIHRoaXMubWVtYmVyU3RhdHVzID0gbWVtYmVyU3RhdHVzITtcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lITtcbiAgICAgICAgdGhpcy51c2VyRW1haWwgPSB1c2VyRW1haWwhO1xuICAgICAgICB0aGlzLnVzZXJUeXBlID0gdXNlclR5cGUhO1xuICAgICAgICB0aGlzLnVzZXJTdGF0dXMgPSB1c2VyU3RhdHVzITtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IGNoYW5nZVBhc3N3b3JkITtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzITtcbiAgICB9XG5cbn1cblxuXG4vKlxuICogIEludGVyZmFjZSBvZiBMb2dpbkRhdGFcbiovXG5leHBvcnQgaW50ZXJmYWNlIElMb2dpbkRhdGEge1xuIFxuICAgIC8vIEFjY2VzcyB0b2tlbiB0byB1c2UgKGZvciB0aGUgZGVmYXVsdCBhY2NvdW50KSBcbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIHVzZXJJZD86IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIGFjY291bnRJZD86IHN0cmluZztcbiBcbiAgICAvLyBDdXJyZW50IGFjY291bnQgaWQgYW5kIHJvbGUgXG4gICAgYWNjb3VudFJvbGU/OiBBY2NvdW50Um9sZUNvZGU7XG4gXG4gICAgLy8gTWVtYmVyIHN0YXR1czogVU5ERUZJTkVEIHwgUEVORElORyB8IEFDVElWRSB8IEZST1pFTiBcbiAgICBtZW1iZXJTdGF0dXM/OiBNZW1iZXJTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFVzZXIgbmFtZSBcbiAgICB1c2VyTmFtZT86IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHVzZXJFbWFpbD86IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIHR5cGUgXG4gICAgdXNlclR5cGU/OiBVc2VyVHlwZUNvZGU7XG4gXG4gICAgLy8gVXNlciBzdGF0dXMgXG4gICAgdXNlclN0YXR1cz86IFVzZXJTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFVzZXIgbXVzdCBjaGFuZ2UgcGFzc3dvcmQgb24gbmV4dCBsb2dpbiBcbiAgICBjaGFuZ2VQYXNzd29yZD86IGJvb2xlYW47XG4gXG4gICAgLy8gTWVzc2FnZXMgdG8gc2hvdyB0byB0aGUgdXNlciBvbiBsb2dpbiBcbiAgICBtZXNzYWdlcz86IHN0cmluZ1tdO1xuIFxufVxuIl19