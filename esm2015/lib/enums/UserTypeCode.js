/*
   User type code
*/
export var UserTypeCode;
(function (UserTypeCode) {
    // Undefined [0] 
    UserTypeCode[UserTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // System administrator has access to all accounts and permissions to perform all actions [1] 
    UserTypeCode[UserTypeCode["SYSADMIN"] = 1] = "SYSADMIN";
    // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
    UserTypeCode[UserTypeCode["SUPPORT"] = 2] = "SUPPORT";
    // Account user - has access to specific accounts with role based access control [4] 
    UserTypeCode[UserTypeCode["USER"] = 4] = "USER";
    // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
    UserTypeCode[UserTypeCode["SERVICE"] = 5] = "SERVICE";
})(UserTypeCode || (UserTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9Vc2VyVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxZQWlCWDtBQWpCRCxXQUFZLFlBQVk7SUFFcEIsaUJBQWlCO0lBQ2pCLHlEQUFhLENBQUE7SUFFYiw4RkFBOEY7SUFDOUYsdURBQVksQ0FBQTtJQUVaLGtHQUFrRztJQUNsRyxxREFBVyxDQUFBO0lBRVgscUZBQXFGO0lBQ3JGLCtDQUFRLENBQUE7SUFFUiw4SEFBOEg7SUFDOUgscURBQVcsQ0FBQTtBQUVmLENBQUMsRUFqQlcsWUFBWSxLQUFaLFlBQVksUUFpQnZCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBVc2VyIHR5cGUgY29kZSBcbiovXG5leHBvcnQgZW51bSBVc2VyVHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBTeXN0ZW0gYWRtaW5pc3RyYXRvciBoYXMgYWNjZXNzIHRvIGFsbCBhY2NvdW50cyBhbmQgcGVybWlzc2lvbnMgdG8gcGVyZm9ybSBhbGwgYWN0aW9ucyBbMV0gXG4gICAgU1lTQURNSU4gPSAxLFxuIFxuICAgIC8vIFN1cHBvcnQgdXNlciBoYXMgdmlldyBwZXJtaXNzaW9ucyBvbmx5IGZvciBhbGwgYWNjb3VudHMgdGhhdCBlbmFibGVkIG9wdGlvbiBFbmFibGUgU3VwcG9ydCBbMl0gXG4gICAgU1VQUE9SVCA9IDIsXG4gXG4gICAgLy8gQWNjb3VudCB1c2VyIC0gaGFzIGFjY2VzcyB0byBzcGVjaWZpYyBhY2NvdW50cyB3aXRoIHJvbGUgYmFzZWQgYWNjZXNzIGNvbnRyb2wgWzRdIFxuICAgIFVTRVIgPSA0LFxuIFxuICAgIC8vIEFjY291bnQgc2VydmljZSAtIHRvIGJlIHVzZWQgYnkgb3RoZXIgc3lzdGVtcyB0byBwZXJmb3JtIGFjdGlvbnMgdXNpbmcgdGhlIEFQSSAoY2FuJ3QgbG9naW4gYXMgYSB1c2VyIHRvIHRoZSBwb3J0YWwpJyBbNV1gIFxuICAgIFNFUlZJQ0UgPSA1LFxuIFxufSJdfQ==