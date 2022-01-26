/*
   General booking options mask (Attributes bit mask)
*/
export var BookingOptionsMask;
(function (BookingOptionsMask) {
    // Undefined [0] 
    BookingOptionsMask[BookingOptionsMask["UNDEFINED"] = 0] = "UNDEFINED";
    // Selection is optional [1] 
    BookingOptionsMask[BookingOptionsMask["OPTIONAL"] = 1] = "OPTIONAL";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va2luZ09wdGlvbnNNYXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9Cb29raW5nT3B0aW9uc01hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxrQkFtQ1g7QUFuQ0QsV0FBWSxrQkFBa0I7SUFFMUIsaUJBQWlCO0lBQ2pCLHFFQUFhLENBQUE7SUFFYiw2QkFBNkI7SUFDN0IsbUVBQVksQ0FBQTtJQUVaLCtCQUErQjtJQUMvQiw2REFBUyxDQUFBO0lBRVQsa0JBQWtCO0lBQ2xCLDREQUFTLENBQUE7SUFFVCxxQkFBcUI7SUFDckIsa0VBQVksQ0FBQTtJQUVaLHFCQUFxQjtJQUNyQixrRUFBWSxDQUFBO0lBRVosbUNBQW1DO0lBQ25DLG1FQUFhLENBQUE7SUFFYixzQkFBc0I7SUFDdEIsMERBQVMsQ0FBQTtJQUVULHNCQUFzQjtJQUN0QiwwREFBUyxDQUFBO0lBRVQsb0JBQW9CO0lBQ3BCLDBEQUFTLENBQUE7SUFFVCxxQkFBcUI7SUFDckIsMERBQVMsQ0FBQTtBQUViLENBQUMsRUFuQ1csa0JBQWtCLEtBQWxCLGtCQUFrQixRQW1DN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEdlbmVyYWwgYm9va2luZyBvcHRpb25zIG1hc2sgKEF0dHJpYnV0ZXMgYml0IG1hc2spIFxuKi9cbmV4cG9ydCBlbnVtIEJvb2tpbmdPcHRpb25zTWFzayB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFNlbGVjdGlvbiBpcyBvcHRpb25hbCBbMV0gXG4gICAgT1BUSU9OQUwgPSAxLFxuIFxuICAgIC8vIFNob3cgU3dlZXAgKHNpbmdsZSBvYXIpIFs0XSBcbiAgICBTV0VFUCA9IDQsXG4gXG4gICAgLy8gU2hvdyBXaWRlIFsxNl0gXG4gICAgV0lERSA9IDE2LFxuIFxuICAgIC8vIFNob3cgQ29uY2VwdCBbMzJdIFxuICAgIENPTkNFUFQgPSAzMixcbiBcbiAgICAvLyBTaG93IFByaXZhdGUgWzY0XSBcbiAgICBQUklWQVRFID0gNjQsXG4gXG4gICAgLy8gU2hvdyBDb2FzdGFsICh1c2UgaW4gc2VhKSBbMTI4XSBcbiAgICBDT0FTVEFMID0gMTI4LFxuIFxuICAgIC8vIFNob3cgU2luZ2xlIFsxMDI0XSBcbiAgICBQMSA9IDEwMjQsXG4gXG4gICAgLy8gU2hvdyBEb3VibGUgWzIwNDhdIFxuICAgIFAyID0gMjA0OCxcbiBcbiAgICAvLyBTaG93IFF1YWQgWzQwOTZdIFxuICAgIFA0ID0gNDA5NixcbiBcbiAgICAvLyBTaG93IEVpZ2h0IFs4MTkyXSBcbiAgICBQOCA9IDgxOTIsXG4gXG59Il19