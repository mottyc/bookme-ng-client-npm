/*
   User status code
*/
export var UserStatusCode;
(function (UserStatusCode) {
    // Undefined [0] 
    UserStatusCode[UserStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // User is registered and pending verification [1] 
    UserStatusCode[UserStatusCode["PENDING"] = 1] = "PENDING";
    // Active user in the system [2] 
    UserStatusCode[UserStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Blocked user (only account system can unblock the user) [3] 
    UserStatusCode[UserStatusCode["BLOCKED"] = 3] = "BLOCKED";
    // Suspended user (about to be deleted) [4] 
    UserStatusCode[UserStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
})(UserStatusCode || (UserStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ib29rbWUtbGliL3NyYy9saWIvZW51bXMvVXNlclN0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxjQWlCWDtBQWpCRCxXQUFZLGNBQWM7SUFFdEIsaUJBQWlCO0lBQ2pCLDZEQUFhLENBQUE7SUFFYixtREFBbUQ7SUFDbkQseURBQVcsQ0FBQTtJQUVYLGlDQUFpQztJQUNqQyx1REFBVSxDQUFBO0lBRVYsK0RBQStEO0lBQy9ELHlEQUFXLENBQUE7SUFFWCw0Q0FBNEM7SUFDNUMsNkRBQWEsQ0FBQTtBQUVqQixDQUFDLEVBakJXLGNBQWMsS0FBZCxjQUFjLFFBaUJ6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgVXNlciBzdGF0dXMgY29kZSBcbiovXG5leHBvcnQgZW51bSBVc2VyU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFVzZXIgaXMgcmVnaXN0ZXJlZCBhbmQgcGVuZGluZyB2ZXJpZmljYXRpb24gWzFdIFxuICAgIFBFTkRJTkcgPSAxLFxuIFxuICAgIC8vIEFjdGl2ZSB1c2VyIGluIHRoZSBzeXN0ZW0gWzJdIFxuICAgIEFDVElWRSA9IDIsXG4gXG4gICAgLy8gQmxvY2tlZCB1c2VyIChvbmx5IGFjY291bnQgc3lzdGVtIGNhbiB1bmJsb2NrIHRoZSB1c2VyKSBbM10gXG4gICAgQkxPQ0tFRCA9IDMsXG4gXG4gICAgLy8gU3VzcGVuZGVkIHVzZXIgKGFib3V0IHRvIGJlIGRlbGV0ZWQpIFs0XSBcbiAgICBTVVNQRU5ERUQgPSA0LFxuIFxufSJdfQ==