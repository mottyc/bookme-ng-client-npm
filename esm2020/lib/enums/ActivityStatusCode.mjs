/*
   Daily activity status code
*/
export var ActivityStatusCode;
(function (ActivityStatusCode) {
    // Undefined - No booking in this activity [0] 
    ActivityStatusCode[ActivityStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Some booking requests approved, not all [1] 
    ActivityStatusCode[ActivityStatusCode["PARTIAL"] = 1] = "PARTIAL";
    // All booking requests approved [2] 
    ActivityStatusCode[ActivityStatusCode["FULL"] = 2] = "FULL";
})(ActivityStatusCode || (ActivityStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aXZpdHlTdGF0dXNDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm9va21lLWxpYi9zcmMvbGliL2VudW1zL0FjdGl2aXR5U3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGtCQVdYO0FBWEQsV0FBWSxrQkFBa0I7SUFFMUIsK0NBQStDO0lBQy9DLHFFQUFhLENBQUE7SUFFYiwrQ0FBK0M7SUFDL0MsaUVBQVcsQ0FBQTtJQUVYLHFDQUFxQztJQUNyQywyREFBUSxDQUFBO0FBRVosQ0FBQyxFQVhXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFXN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIERhaWx5IGFjdGl2aXR5IHN0YXR1cyBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIEFjdGl2aXR5U3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIC0gTm8gYm9va2luZyBpbiB0aGlzIGFjdGl2aXR5IFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFNvbWUgYm9va2luZyByZXF1ZXN0cyBhcHByb3ZlZCwgbm90IGFsbCBbMV0gXG4gICAgUEFSVElBTCA9IDEsXG4gXG4gICAgLy8gQWxsIGJvb2tpbmcgcmVxdWVzdHMgYXBwcm92ZWQgWzJdIFxuICAgIEZVTEwgPSAyLFxuIFxufSJdfQ==