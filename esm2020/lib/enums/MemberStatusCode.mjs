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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvTWVtYmVyU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGdCQWlCWDtBQWpCRCxXQUFZLGdCQUFnQjtJQUV4QixpQkFBaUI7SUFDakIsaUVBQWEsQ0FBQTtJQUViLGlEQUFpRDtJQUNqRCw2REFBVyxDQUFBO0lBRVgsb0NBQW9DO0lBQ3BDLDJEQUFVLENBQUE7SUFFViw4Q0FBOEM7SUFDOUMsMkRBQVUsQ0FBQTtJQUVWLGdEQUFnRDtJQUNoRCwrREFBWSxDQUFBO0FBRWhCLENBQUMsRUFqQlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQWlCM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIE1lbWJlciBzdGF0dXMgY29kZSBcbiovXG5leHBvcnQgZW51bSBNZW1iZXJTdGF0dXNDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gTWVtYmVyIGlzIHJlZ2lzdGVyZWQgYW5kIHBlbmRpbmcgYXBwcm92YWwgWzFdIFxuICAgIFBFTkRJTkcgPSAxLFxuIFxuICAgIC8vIEFjdGl2ZSBtZW1iZXIgaW4gdGhlIGFjY291bnQgWzJdIFxuICAgIEFDVElWRSA9IDIsXG4gXG4gICAgLy8gRnJvemVuIG1lbWJlciAodGVtcG9yYXJpbHkgbm90IGFjdGl2ZSkgWzNdIFxuICAgIEZST1pFTiA9IDMsXG4gXG4gICAgLy8gSW5hY3RpdmUgbWVtYmVyIChwZXJtYW5lbnRseSBub3QgYWN0aXZlKSBbNF0gXG4gICAgSU5BQ1RJVkUgPSA0LFxuIFxufSJdfQ==