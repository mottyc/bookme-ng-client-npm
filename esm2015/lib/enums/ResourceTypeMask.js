/*
   General Resource Type (Attributes bit mask)
*/
export var ResourceTypeMask;
(function (ResourceTypeMask) {
    // Undefined [0] 
    ResourceTypeMask[ResourceTypeMask["UNDEFINED"] = 0] = "UNDEFINED";
    // Rowing Boat [1] 
    ResourceTypeMask[ResourceTypeMask["RBOAT"] = 1] = "RBOAT";
    // Kayak [2] 
    ResourceTypeMask[ResourceTypeMask["KAYAK"] = 2] = "KAYAK";
    // Sculling (2 oars) [4] 
    ResourceTypeMask[ResourceTypeMask["SCULL"] = 4] = "SCULL";
    // Need Cox [8] 
    ResourceTypeMask[ResourceTypeMask["COX"] = 8] = "COX";
    // Wide [16] 
    ResourceTypeMask[ResourceTypeMask["WIDE"] = 16] = "WIDE";
    // For competition [32] 
    ResourceTypeMask[ResourceTypeMask["COMP"] = 32] = "COMP";
    // For para-olympic [64] 
    ResourceTypeMask[ResourceTypeMask["PARA"] = 64] = "PARA";
    // Coastal (use in sea) [128] 
    ResourceTypeMask[ResourceTypeMask["COASTAL"] = 128] = "COASTAL";
    // Single [1024] 
    ResourceTypeMask[ResourceTypeMask["P1"] = 1024] = "P1";
    // Double [2048] 
    ResourceTypeMask[ResourceTypeMask["P2"] = 2048] = "P2";
    // Quad [4096] 
    ResourceTypeMask[ResourceTypeMask["P4"] = 4096] = "P4";
    // Eight [8192] 
    ResourceTypeMask[ResourceTypeMask["P8"] = 8192] = "P8";
})(ResourceTypeMask || (ResourceTypeMask = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VUeXBlTWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvUmVzb3VyY2VUeXBlTWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGdCQXlDWDtBQXpDRCxXQUFZLGdCQUFnQjtJQUV4QixpQkFBaUI7SUFDakIsaUVBQWEsQ0FBQTtJQUViLG1CQUFtQjtJQUNuQix5REFBUyxDQUFBO0lBRVQsYUFBYTtJQUNiLHlEQUFTLENBQUE7SUFFVCx5QkFBeUI7SUFDekIseURBQVMsQ0FBQTtJQUVULGdCQUFnQjtJQUNoQixxREFBTyxDQUFBO0lBRVAsYUFBYTtJQUNiLHdEQUFTLENBQUE7SUFFVCx3QkFBd0I7SUFDeEIsd0RBQVMsQ0FBQTtJQUVULHlCQUF5QjtJQUN6Qix3REFBUyxDQUFBO0lBRVQsOEJBQThCO0lBQzlCLCtEQUFhLENBQUE7SUFFYixpQkFBaUI7SUFDakIsc0RBQVMsQ0FBQTtJQUVULGlCQUFpQjtJQUNqQixzREFBUyxDQUFBO0lBRVQsZUFBZTtJQUNmLHNEQUFTLENBQUE7SUFFVCxnQkFBZ0I7SUFDaEIsc0RBQVMsQ0FBQTtBQUViLENBQUMsRUF6Q1csZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXlDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEdlbmVyYWwgUmVzb3VyY2UgVHlwZSAoQXR0cmlidXRlcyBiaXQgbWFzaykgXG4qL1xuZXhwb3J0IGVudW0gUmVzb3VyY2VUeXBlTWFzayB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFJvd2luZyBCb2F0IFsxXSBcbiAgICBSQk9BVCA9IDEsXG4gXG4gICAgLy8gS2F5YWsgWzJdIFxuICAgIEtBWUFLID0gMixcbiBcbiAgICAvLyBTY3VsbGluZyAoMiBvYXJzKSBbNF0gXG4gICAgU0NVTEwgPSA0LFxuIFxuICAgIC8vIE5lZWQgQ294IFs4XSBcbiAgICBDT1ggPSA4LFxuIFxuICAgIC8vIFdpZGUgWzE2XSBcbiAgICBXSURFID0gMTYsXG4gXG4gICAgLy8gRm9yIGNvbXBldGl0aW9uIFszMl0gXG4gICAgQ09NUCA9IDMyLFxuIFxuICAgIC8vIEZvciBwYXJhLW9seW1waWMgWzY0XSBcbiAgICBQQVJBID0gNjQsXG4gXG4gICAgLy8gQ29hc3RhbCAodXNlIGluIHNlYSkgWzEyOF0gXG4gICAgQ09BU1RBTCA9IDEyOCxcbiBcbiAgICAvLyBTaW5nbGUgWzEwMjRdIFxuICAgIFAxID0gMTAyNCxcbiBcbiAgICAvLyBEb3VibGUgWzIwNDhdIFxuICAgIFAyID0gMjA0OCxcbiBcbiAgICAvLyBRdWFkIFs0MDk2XSBcbiAgICBQNCA9IDQwOTYsXG4gXG4gICAgLy8gRWlnaHQgWzgxOTJdIFxuICAgIFA4ID0gODE5MixcbiBcbn0iXX0=