/*
   General booking options mask (Attributes bit mask)
*/
export var BookingOptionsMask;
(function (BookingOptionsMask) {
    // Undefined [0] 
    BookingOptionsMask[BookingOptionsMask["UNDEFINED"] = 0] = "UNDEFINED";
    // Selection is optional [1] 
    BookingOptionsMask[BookingOptionsMask["OPTIONAL"] = 1] = "OPTIONAL";
    // No approval for resource allocation is required [2] 
    BookingOptionsMask[BookingOptionsMask["APPROVE"] = 2] = "APPROVE";
    // Show Sweep (single oar) [4] 
    BookingOptionsMask[BookingOptionsMask["SWEEP"] = 4] = "SWEEP";
    // Show Wide [16] 
    BookingOptionsMask[BookingOptionsMask["WIDE"] = 16] = "WIDE";
    // Show Concept [32] 
    BookingOptionsMask[BookingOptionsMask["CONCEPT"] = 32] = "CONCEPT";
    // Show Private [64] 
    BookingOptionsMask[BookingOptionsMask["PRIVATE"] = 64] = "PRIVATE";
    // Show Coastal (use in sea) [128] 
    BookingOptionsMask[BookingOptionsMask["COASTAL"] = 128] = "COASTAL";
    // Show Single [1024] 
    BookingOptionsMask[BookingOptionsMask["P1"] = 1024] = "P1";
    // Show Double [2048] 
    BookingOptionsMask[BookingOptionsMask["P2"] = 2048] = "P2";
    // Show Quad [4096] 
    BookingOptionsMask[BookingOptionsMask["P4"] = 4096] = "P4";
    // Show Eight [8192] 
    BookingOptionsMask[BookingOptionsMask["P8"] = 8192] = "P8";
})(BookingOptionsMask || (BookingOptionsMask = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2luZ09wdGlvbnNNYXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYm9va21lLWxpYi9zcmMvbGliL2VudW1zL0Jvb2tpbmdPcHRpb25zTWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGtCQXNDWDtBQXRDRCxXQUFZLGtCQUFrQjtJQUUxQixpQkFBaUI7SUFDakIscUVBQWEsQ0FBQTtJQUViLDZCQUE2QjtJQUM3QixtRUFBWSxDQUFBO0lBRVosdURBQXVEO0lBQ3ZELGlFQUFXLENBQUE7SUFFWCwrQkFBK0I7SUFDL0IsNkRBQVMsQ0FBQTtJQUVULGtCQUFrQjtJQUNsQiw0REFBUyxDQUFBO0lBRVQscUJBQXFCO0lBQ3JCLGtFQUFZLENBQUE7SUFFWixxQkFBcUI7SUFDckIsa0VBQVksQ0FBQTtJQUVaLG1DQUFtQztJQUNuQyxtRUFBYSxDQUFBO0lBRWIsc0JBQXNCO0lBQ3RCLDBEQUFTLENBQUE7SUFFVCxzQkFBc0I7SUFDdEIsMERBQVMsQ0FBQTtJQUVULG9CQUFvQjtJQUNwQiwwREFBUyxDQUFBO0lBRVQscUJBQXFCO0lBQ3JCLDBEQUFTLENBQUE7QUFFYixDQUFDLEVBdENXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFzQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBHZW5lcmFsIGJvb2tpbmcgb3B0aW9ucyBtYXNrIChBdHRyaWJ1dGVzIGJpdCBtYXNrKSBcbiovXG5leHBvcnQgZW51bSBCb29raW5nT3B0aW9uc01hc2sge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBTZWxlY3Rpb24gaXMgb3B0aW9uYWwgWzFdIFxuICAgIE9QVElPTkFMID0gMSxcbiBcbiAgICAvLyBObyBhcHByb3ZhbCBmb3IgcmVzb3VyY2UgYWxsb2NhdGlvbiBpcyByZXF1aXJlZCBbMl0gXG4gICAgQVBQUk9WRSA9IDIsXG4gXG4gICAgLy8gU2hvdyBTd2VlcCAoc2luZ2xlIG9hcikgWzRdIFxuICAgIFNXRUVQID0gNCxcbiBcbiAgICAvLyBTaG93IFdpZGUgWzE2XSBcbiAgICBXSURFID0gMTYsXG4gXG4gICAgLy8gU2hvdyBDb25jZXB0IFszMl0gXG4gICAgQ09OQ0VQVCA9IDMyLFxuIFxuICAgIC8vIFNob3cgUHJpdmF0ZSBbNjRdIFxuICAgIFBSSVZBVEUgPSA2NCxcbiBcbiAgICAvLyBTaG93IENvYXN0YWwgKHVzZSBpbiBzZWEpIFsxMjhdIFxuICAgIENPQVNUQUwgPSAxMjgsXG4gXG4gICAgLy8gU2hvdyBTaW5nbGUgWzEwMjRdIFxuICAgIFAxID0gMTAyNCxcbiBcbiAgICAvLyBTaG93IERvdWJsZSBbMjA0OF0gXG4gICAgUDIgPSAyMDQ4LFxuIFxuICAgIC8vIFNob3cgUXVhZCBbNDA5Nl0gXG4gICAgUDQgPSA0MDk2LFxuIFxuICAgIC8vIFNob3cgRWlnaHQgWzgxOTJdIFxuICAgIFA4ID0gODE5MixcbiBcbn0iXX0=