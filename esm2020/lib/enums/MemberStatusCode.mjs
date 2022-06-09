/*
   Member status code
*/
export var MemberStatusCode;
(function (MemberStatusCode) {
    // Undefined [0] 
    MemberStatusCode[MemberStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Member is registered and pending approval [1] 
    MemberStatusCode[MemberStatusCode["PENDING"] = 1] = "PENDING";
    // Active member in the account [2] 
    MemberStatusCode[MemberStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Frozen member (temporarily not active) [3] 
    MemberStatusCode[MemberStatusCode["FROZEN"] = 3] = "FROZEN";
    // Inactive member (permanently not active) [4] 
    MemberStatusCode[MemberStatusCode["INACTIVE"] = 4] = "INACTIVE";
})(MemberStatusCode || (MemberStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jvb2ttZS1saWIvc3JjL2xpYi9lbnVtcy9NZW1iZXJTdGF0dXNDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksZ0JBaUJYO0FBakJELFdBQVksZ0JBQWdCO0lBRXhCLGlCQUFpQjtJQUNqQixpRUFBYSxDQUFBO0lBRWIsaURBQWlEO0lBQ2pELDZEQUFXLENBQUE7SUFFWCxvQ0FBb0M7SUFDcEMsMkRBQVUsQ0FBQTtJQUVWLDhDQUE4QztJQUM5QywyREFBVSxDQUFBO0lBRVYsZ0RBQWdEO0lBQ2hELCtEQUFZLENBQUE7QUFFaEIsQ0FBQyxFQWpCVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBaUIzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgTWVtYmVyIHN0YXR1cyBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIE1lbWJlclN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBNZW1iZXIgaXMgcmVnaXN0ZXJlZCBhbmQgcGVuZGluZyBhcHByb3ZhbCBbMV0gXG4gICAgUEVORElORyA9IDEsXG4gXG4gICAgLy8gQWN0aXZlIG1lbWJlciBpbiB0aGUgYWNjb3VudCBbMl0gXG4gICAgQUNUSVZFID0gMixcbiBcbiAgICAvLyBGcm96ZW4gbWVtYmVyICh0ZW1wb3JhcmlseSBub3QgYWN0aXZlKSBbM10gXG4gICAgRlJPWkVOID0gMyxcbiBcbiAgICAvLyBJbmFjdGl2ZSBtZW1iZXIgKHBlcm1hbmVudGx5IG5vdCBhY3RpdmUpIFs0XSBcbiAgICBJTkFDVElWRSA9IDQsXG4gXG59Il19