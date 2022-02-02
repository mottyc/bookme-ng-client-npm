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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5EYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9jb21tb24vTG9naW5EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFNBQVM7SUFtQ2xCLFlBQVksV0FBb0IsRUFBRSxNQUFlLEVBQUUsU0FBa0IsRUFBRSxXQUE2QixFQUFFLFlBQStCLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLFFBQXVCLEVBQUUsVUFBMkIsRUFBRSxjQUF3QixFQUFFLFFBQW1CO1FBQzdRLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbWJlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9NZW1iZXJTdGF0dXNDb2RlJztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5pbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJTdGF0dXNDb2RlJztcbmltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5cbi8qIFxuICogIExvZ2luIGRhdGEgKHJldHVybmVkIGJ5IHRoZSBBUEkgYWZ0ZXIgc3VjY2Vzc2Z1bCBsb2dpbilcbiovXG5leHBvcnQgY2xhc3MgTG9naW5EYXRhIHtcbiBcbiAgICAvLyBBY2Nlc3MgdG9rZW4gdG8gdXNlIChmb3IgdGhlIGRlZmF1bHQgYWNjb3VudCkgXG4gICAgcHVibGljIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBJZCBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gQ3VycmVudCBhY2NvdW50IGlkIGFuZCByb2xlIFxuICAgIHB1YmxpYyBhY2NvdW50Um9sZTogQWNjb3VudFJvbGVDb2RlO1xuIFxuICAgIC8vIE1lbWJlciBzdGF0dXM6IFVOREVGSU5FRCB8IFBFTkRJTkcgfCBBQ1RJVkUgfCBGUk9aRU4gXG4gICAgcHVibGljIG1lbWJlclN0YXR1czogTWVtYmVyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBlbWFpbCBcbiAgICBwdWJsaWMgdXNlckVtYWlsOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciB0eXBlIFxuICAgIHB1YmxpYyB1c2VyVHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgc3RhdHVzIFxuICAgIHB1YmxpYyB1c2VyU3RhdHVzOiBVc2VyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBVc2VyIG11c3QgY2hhbmdlIHBhc3N3b3JkIG9uIG5leHQgbG9naW4gXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xuIFxuICAgIC8vIE1lc3NhZ2VzIHRvIHNob3cgdG8gdGhlIHVzZXIgb24gbG9naW4gXG4gICAgcHVibGljIG1lc3NhZ2VzOiBzdHJpbmdbXTtcbiBcbiAgICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbj86IHN0cmluZywgdXNlcklkPzogc3RyaW5nLCBhY2NvdW50SWQ/OiBzdHJpbmcsIGFjY291bnRSb2xlPzogQWNjb3VudFJvbGVDb2RlLCBtZW1iZXJTdGF0dXM/OiBNZW1iZXJTdGF0dXNDb2RlLCB1c2VyTmFtZT86IHN0cmluZywgdXNlckVtYWlsPzogc3RyaW5nLCB1c2VyVHlwZT86IFVzZXJUeXBlQ29kZSwgdXNlclN0YXR1cz86IFVzZXJTdGF0dXNDb2RlLCBjaGFuZ2VQYXNzd29yZD86IGJvb2xlYW4sIG1lc3NhZ2VzPzogc3RyaW5nW10pIHsgXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gYWNjb3VudElkO1xuICAgICAgICB0aGlzLmFjY291bnRSb2xlID0gYWNjb3VudFJvbGU7XG4gICAgICAgIHRoaXMubWVtYmVyU3RhdHVzID0gbWVtYmVyU3RhdHVzO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgIHRoaXMudXNlckVtYWlsID0gdXNlckVtYWlsO1xuICAgICAgICB0aGlzLnVzZXJUeXBlID0gdXNlclR5cGU7XG4gICAgICAgIHRoaXMudXNlclN0YXR1cyA9IHVzZXJTdGF0dXM7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSBjaGFuZ2VQYXNzd29yZDtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgIH1cblxufVxuXG5cbi8qXG4gKiAgSW50ZXJmYWNlIG9mIExvZ2luRGF0YVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2luRGF0YSB7XG4gXG4gICAgLy8gQWNjZXNzIHRva2VuIHRvIHVzZSAoZm9yIHRoZSBkZWZhdWx0IGFjY291bnQpIFxuICAgIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgSWQgXG4gICAgdXNlcklkPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgYWNjb3VudElkPzogc3RyaW5nO1xuIFxuICAgIC8vIEN1cnJlbnQgYWNjb3VudCBpZCBhbmQgcm9sZSBcbiAgICBhY2NvdW50Um9sZT86IEFjY291bnRSb2xlQ29kZTtcbiBcbiAgICAvLyBNZW1iZXIgc3RhdHVzOiBVTkRFRklORUQgfCBQRU5ESU5HIHwgQUNUSVZFIHwgRlJPWkVOIFxuICAgIG1lbWJlclN0YXR1cz86IE1lbWJlclN0YXR1c0NvZGU7XG4gXG4gICAgLy8gVXNlciBuYW1lIFxuICAgIHVzZXJOYW1lPzogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgZW1haWwgXG4gICAgdXNlckVtYWlsPzogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgdHlwZSBcbiAgICB1c2VyVHlwZT86IFVzZXJUeXBlQ29kZTtcbiBcbiAgICAvLyBVc2VyIHN0YXR1cyBcbiAgICB1c2VyU3RhdHVzPzogVXNlclN0YXR1c0NvZGU7XG4gXG4gICAgLy8gVXNlciBtdXN0IGNoYW5nZSBwYXNzd29yZCBvbiBuZXh0IGxvZ2luIFxuICAgIGNoYW5nZVBhc3N3b3JkPzogYm9vbGVhbjtcbiBcbiAgICAvLyBNZXNzYWdlcyB0byBzaG93IHRvIHRoZSB1c2VyIG9uIGxvZ2luIFxuICAgIG1lc3NhZ2VzPzogc3RyaW5nW107XG4gXG59XG4iXX0=