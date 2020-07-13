/*
   Account role code (represent role of user in the account)
*/
export var AccountRoleCode;
(function (AccountRoleCode) {
    // Undefined [0] 
    AccountRoleCode[AccountRoleCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Account administrator can perform all operations [1] 
    AccountRoleCode[AccountRoleCode["ADMIN"] = 1] = "ADMIN";
    // Part of a club staff [2] 
    AccountRoleCode[AccountRoleCode["STAFF"] = 2] = "STAFF";
    // Club Member [3] 
    AccountRoleCode[AccountRoleCode["MEMBER"] = 3] = "MEMBER";
    // Olympic team [4] 
    AccountRoleCode[AccountRoleCode["TEAM"] = 4] = "TEAM";
    // Para-olympic team [5] 
    AccountRoleCode[AccountRoleCode["PARA"] = 5] = "PARA";
    // Club guest [6] 
    AccountRoleCode[AccountRoleCode["GUEST"] = 6] = "GUEST";
})(AccountRoleCode || (AccountRoleCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFJvbGVDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1vdHR5Yy9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BY2NvdW50Um9sZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxlQXVCWDtBQXZCRCxXQUFZLGVBQWU7SUFFdkIsaUJBQWlCO0lBQ2pCLCtEQUFhLENBQUE7SUFFYix3REFBd0Q7SUFDeEQsdURBQVMsQ0FBQTtJQUVULDRCQUE0QjtJQUM1Qix1REFBUyxDQUFBO0lBRVQsbUJBQW1CO0lBQ25CLHlEQUFVLENBQUE7SUFFVixvQkFBb0I7SUFDcEIscURBQVEsQ0FBQTtJQUVSLHlCQUF5QjtJQUN6QixxREFBUSxDQUFBO0lBRVIsa0JBQWtCO0lBQ2xCLHVEQUFTLENBQUE7QUFFYixDQUFDLEVBdkJXLGVBQWUsS0FBZixlQUFlLFFBdUIxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQWNjb3VudCByb2xlIGNvZGUgKHJlcHJlc2VudCByb2xlIG9mIHVzZXIgaW4gdGhlIGFjY291bnQpIFxuKi9cbmV4cG9ydCBlbnVtIEFjY291bnRSb2xlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEFjY291bnQgYWRtaW5pc3RyYXRvciBjYW4gcGVyZm9ybSBhbGwgb3BlcmF0aW9ucyBbMV0gXG4gICAgQURNSU4gPSAxLFxuIFxuICAgIC8vIFBhcnQgb2YgYSBjbHViIHN0YWZmIFsyXSBcbiAgICBTVEFGRiA9IDIsXG4gXG4gICAgLy8gQ2x1YiBNZW1iZXIgWzNdIFxuICAgIE1FTUJFUiA9IDMsXG4gXG4gICAgLy8gT2x5bXBpYyB0ZWFtIFs0XSBcbiAgICBURUFNID0gNCxcbiBcbiAgICAvLyBQYXJhLW9seW1waWMgdGVhbSBbNV0gXG4gICAgUEFSQSA9IDUsXG4gXG4gICAgLy8gQ2x1YiBndWVzdCBbNl0gXG4gICAgR1VFU1QgPSA2LFxuIFxufSJdfQ==