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
    // Club Member [4] 
    AccountRoleCode[AccountRoleCode["MEMBER"] = 4] = "MEMBER";
    // Olympic team [8] 
    AccountRoleCode[AccountRoleCode["TEAM"] = 8] = "TEAM";
    // Paralympic team [16] 
    AccountRoleCode[AccountRoleCode["PARA"] = 16] = "PARA";
    // Club guest [32] 
    AccountRoleCode[AccountRoleCode["GUEST"] = 32] = "GUEST";
})(AccountRoleCode || (AccountRoleCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFJvbGVDb2RlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BY2NvdW50Um9sZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxlQXVCWDtBQXZCRCxXQUFZLGVBQWU7SUFFdkIsaUJBQWlCO0lBQ2pCLCtEQUFhLENBQUE7SUFFYix3REFBd0Q7SUFDeEQsdURBQVMsQ0FBQTtJQUVULDRCQUE0QjtJQUM1Qix1REFBUyxDQUFBO0lBRVQsbUJBQW1CO0lBQ25CLHlEQUFVLENBQUE7SUFFVixvQkFBb0I7SUFDcEIscURBQVEsQ0FBQTtJQUVSLHdCQUF3QjtJQUN4QixzREFBUyxDQUFBO0lBRVQsbUJBQW1CO0lBQ25CLHdEQUFVLENBQUE7QUFFZCxDQUFDLEVBdkJXLGVBQWUsS0FBZixlQUFlLFFBdUIxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQWNjb3VudCByb2xlIGNvZGUgKHJlcHJlc2VudCByb2xlIG9mIHVzZXIgaW4gdGhlIGFjY291bnQpIFxuKi9cbmV4cG9ydCBlbnVtIEFjY291bnRSb2xlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEFjY291bnQgYWRtaW5pc3RyYXRvciBjYW4gcGVyZm9ybSBhbGwgb3BlcmF0aW9ucyBbMV0gXG4gICAgQURNSU4gPSAxLFxuIFxuICAgIC8vIFBhcnQgb2YgYSBjbHViIHN0YWZmIFsyXSBcbiAgICBTVEFGRiA9IDIsXG4gXG4gICAgLy8gQ2x1YiBNZW1iZXIgWzRdIFxuICAgIE1FTUJFUiA9IDQsXG4gXG4gICAgLy8gT2x5bXBpYyB0ZWFtIFs4XSBcbiAgICBURUFNID0gOCxcbiBcbiAgICAvLyBQYXJhbHltcGljIHRlYW0gWzE2XSBcbiAgICBQQVJBID0gMTYsXG4gXG4gICAgLy8gQ2x1YiBndWVzdCBbMzJdIFxuICAgIEdVRVNUID0gMzIsXG4gXG59Il19