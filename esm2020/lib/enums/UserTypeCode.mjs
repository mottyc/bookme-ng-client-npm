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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm9va21lLWxpYi9zcmMvbGliL2VudW1zL1VzZXJUeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLFlBaUJYO0FBakJELFdBQVksWUFBWTtJQUVwQixpQkFBaUI7SUFDakIseURBQWEsQ0FBQTtJQUViLDhGQUE4RjtJQUM5Rix1REFBWSxDQUFBO0lBRVosa0dBQWtHO0lBQ2xHLHFEQUFXLENBQUE7SUFFWCxxRkFBcUY7SUFDckYsK0NBQVEsQ0FBQTtJQUVSLDhIQUE4SDtJQUM5SCxxREFBVyxDQUFBO0FBRWYsQ0FBQyxFQWpCVyxZQUFZLEtBQVosWUFBWSxRQWlCdkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIFVzZXIgdHlwZSBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIFVzZXJUeXBlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFN5c3RlbSBhZG1pbmlzdHJhdG9yIGhhcyBhY2Nlc3MgdG8gYWxsIGFjY291bnRzIGFuZCBwZXJtaXNzaW9ucyB0byBwZXJmb3JtIGFsbCBhY3Rpb25zIFsxXSBcbiAgICBTWVNBRE1JTiA9IDEsXG4gXG4gICAgLy8gU3VwcG9ydCB1c2VyIGhhcyB2aWV3IHBlcm1pc3Npb25zIG9ubHkgZm9yIGFsbCBhY2NvdW50cyB0aGF0IGVuYWJsZWQgb3B0aW9uIEVuYWJsZSBTdXBwb3J0IFsyXSBcbiAgICBTVVBQT1JUID0gMixcbiBcbiAgICAvLyBBY2NvdW50IHVzZXIgLSBoYXMgYWNjZXNzIHRvIHNwZWNpZmljIGFjY291bnRzIHdpdGggcm9sZSBiYXNlZCBhY2Nlc3MgY29udHJvbCBbNF0gXG4gICAgVVNFUiA9IDQsXG4gXG4gICAgLy8gQWNjb3VudCBzZXJ2aWNlIC0gdG8gYmUgdXNlZCBieSBvdGhlciBzeXN0ZW1zIHRvIHBlcmZvcm0gYWN0aW9ucyB1c2luZyB0aGUgQVBJIChjYW4ndCBsb2dpbiBhcyBhIHVzZXIgdG8gdGhlIHBvcnRhbCknIFs1XWAgXG4gICAgU0VSVklDRSA9IDUsXG4gXG59Il19