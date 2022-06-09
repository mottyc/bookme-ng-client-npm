/*
   Booking status code
*/
export var BookingStatusCode;
(function (BookingStatusCode) {
    // Undefined [0] 
    BookingStatusCode[BookingStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Pending booking request [1] 
    BookingStatusCode[BookingStatusCode["PENDING"] = 1] = "PENDING";
    // Approved booking [2] 
    BookingStatusCode[BookingStatusCode["APPROVED"] = 2] = "APPROVED";
    // Completed booking [3] 
    BookingStatusCode[BookingStatusCode["COMPLETED"] = 3] = "COMPLETED";
    // User absence from booking [4] 
    BookingStatusCode[BookingStatusCode["ABSENCE"] = 4] = "ABSENCE";
    // User was involved in an accident [5] 
    BookingStatusCode[BookingStatusCode["ACCIDENT"] = 5] = "ACCIDENT";
})(BookingStatusCode || (BookingStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2luZ1N0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ib29rbWUtbGliL3NyYy9saWIvZW51bXMvQm9va2luZ1N0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxpQkFvQlg7QUFwQkQsV0FBWSxpQkFBaUI7SUFFekIsaUJBQWlCO0lBQ2pCLG1FQUFhLENBQUE7SUFFYiwrQkFBK0I7SUFDL0IsK0RBQVcsQ0FBQTtJQUVYLHdCQUF3QjtJQUN4QixpRUFBWSxDQUFBO0lBRVoseUJBQXlCO0lBQ3pCLG1FQUFhLENBQUE7SUFFYixpQ0FBaUM7SUFDakMsK0RBQVcsQ0FBQTtJQUVYLHdDQUF3QztJQUN4QyxpRUFBWSxDQUFBO0FBRWhCLENBQUMsRUFwQlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQW9CNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEJvb2tpbmcgc3RhdHVzIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gQm9va2luZ1N0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBQZW5kaW5nIGJvb2tpbmcgcmVxdWVzdCBbMV0gXG4gICAgUEVORElORyA9IDEsXG4gXG4gICAgLy8gQXBwcm92ZWQgYm9va2luZyBbMl0gXG4gICAgQVBQUk9WRUQgPSAyLFxuIFxuICAgIC8vIENvbXBsZXRlZCBib29raW5nIFszXSBcbiAgICBDT01QTEVURUQgPSAzLFxuIFxuICAgIC8vIFVzZXIgYWJzZW5jZSBmcm9tIGJvb2tpbmcgWzRdIFxuICAgIEFCU0VOQ0UgPSA0LFxuIFxuICAgIC8vIFVzZXIgd2FzIGludm9sdmVkIGluIGFuIGFjY2lkZW50IFs1XSBcbiAgICBBQ0NJREVOVCA9IDUsXG4gXG59Il19