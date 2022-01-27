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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2luZ09wdGlvbnNNYXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9Cb29raW5nT3B0aW9uc01hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxrQkFzQ1g7QUF0Q0QsV0FBWSxrQkFBa0I7SUFFMUIsaUJBQWlCO0lBQ2pCLHFFQUFhLENBQUE7SUFFYiw2QkFBNkI7SUFDN0IsbUVBQVksQ0FBQTtJQUVaLHVEQUF1RDtJQUN2RCxpRUFBVyxDQUFBO0lBRVgsK0JBQStCO0lBQy9CLDZEQUFTLENBQUE7SUFFVCxrQkFBa0I7SUFDbEIsNERBQVMsQ0FBQTtJQUVULHFCQUFxQjtJQUNyQixrRUFBWSxDQUFBO0lBRVoscUJBQXFCO0lBQ3JCLGtFQUFZLENBQUE7SUFFWixtQ0FBbUM7SUFDbkMsbUVBQWEsQ0FBQTtJQUViLHNCQUFzQjtJQUN0QiwwREFBUyxDQUFBO0lBRVQsc0JBQXNCO0lBQ3RCLDBEQUFTLENBQUE7SUFFVCxvQkFBb0I7SUFDcEIsMERBQVMsQ0FBQTtJQUVULHFCQUFxQjtJQUNyQiwwREFBUyxDQUFBO0FBRWIsQ0FBQyxFQXRDVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBc0M3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgR2VuZXJhbCBib29raW5nIG9wdGlvbnMgbWFzayAoQXR0cmlidXRlcyBiaXQgbWFzaykgXG4qL1xuZXhwb3J0IGVudW0gQm9va2luZ09wdGlvbnNNYXNrIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU2VsZWN0aW9uIGlzIG9wdGlvbmFsIFsxXSBcbiAgICBPUFRJT05BTCA9IDEsXG4gXG4gICAgLy8gTm8gYXBwcm92YWwgZm9yIHJlc291cmNlIGFsbG9jYXRpb24gaXMgcmVxdWlyZWQgWzJdIFxuICAgIEFQUFJPVkUgPSAyLFxuIFxuICAgIC8vIFNob3cgU3dlZXAgKHNpbmdsZSBvYXIpIFs0XSBcbiAgICBTV0VFUCA9IDQsXG4gXG4gICAgLy8gU2hvdyBXaWRlIFsxNl0gXG4gICAgV0lERSA9IDE2LFxuIFxuICAgIC8vIFNob3cgQ29uY2VwdCBbMzJdIFxuICAgIENPTkNFUFQgPSAzMixcbiBcbiAgICAvLyBTaG93IFByaXZhdGUgWzY0XSBcbiAgICBQUklWQVRFID0gNjQsXG4gXG4gICAgLy8gU2hvdyBDb2FzdGFsICh1c2UgaW4gc2VhKSBbMTI4XSBcbiAgICBDT0FTVEFMID0gMTI4LFxuIFxuICAgIC8vIFNob3cgU2luZ2xlIFsxMDI0XSBcbiAgICBQMSA9IDEwMjQsXG4gXG4gICAgLy8gU2hvdyBEb3VibGUgWzIwNDhdIFxuICAgIFAyID0gMjA0OCxcbiBcbiAgICAvLyBTaG93IFF1YWQgWzQwOTZdIFxuICAgIFA0ID0gNDA5NixcbiBcbiAgICAvLyBTaG93IEVpZ2h0IFs4MTkyXSBcbiAgICBQOCA9IDgxOTIsXG4gXG59Il19