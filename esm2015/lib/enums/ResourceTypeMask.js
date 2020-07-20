/*
   General Resource Type (Attributes bit mask)
*/
export var ResourceTypeMask;
(function (ResourceTypeMask) {
    // Undefined [0] 
    ResourceTypeMask[ResourceTypeMask["UNDEFINED"] = 0] = "UNDEFINED";
    // Single [1] 
    ResourceTypeMask[ResourceTypeMask["P1"] = 1] = "P1";
    // Double [2] 
    ResourceTypeMask[ResourceTypeMask["P2"] = 2] = "P2";
    // Quad [4] 
    ResourceTypeMask[ResourceTypeMask["P4"] = 4] = "P4";
    // Eight [8] 
    ResourceTypeMask[ResourceTypeMask["P8"] = 8] = "P8";
    // Wide [16] 
    ResourceTypeMask[ResourceTypeMask["WIDE"] = 16] = "WIDE";
    // Sculling (2 oars) [32] 
    ResourceTypeMask[ResourceTypeMask["SCULL"] = 32] = "SCULL";
    // Need Cox [64] 
    ResourceTypeMask[ResourceTypeMask["COX"] = 64] = "COX";
    // Coastal (use in sea) [128] 
    ResourceTypeMask[ResourceTypeMask["COASTAL"] = 128] = "COASTAL";
    // For competition [254] 
    ResourceTypeMask[ResourceTypeMask["COMP"] = 254] = "COMP";
    // For para-olympic [512] 
    ResourceTypeMask[ResourceTypeMask["PARA"] = 512] = "PARA";
    // Rowing Boat [1024] 
    ResourceTypeMask[ResourceTypeMask["RBOAT"] = 1024] = "RBOAT";
    // Kayak [2048] 
    ResourceTypeMask[ResourceTypeMask["KAYAK"] = 2048] = "KAYAK";
    // Surf Ski [4096] 
    ResourceTypeMask[ResourceTypeMask["SURFSKI"] = 4096] = "SURFSKI";
    // Waves Kayak [8192] 
    ResourceTypeMask[ResourceTypeMask["WAVES"] = 8192] = "WAVES";
})(ResourceTypeMask || (ResourceTypeMask = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VUeXBlTWFzay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Btb3R0eWMvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvUmVzb3VyY2VUeXBlTWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGdCQStDWDtBQS9DRCxXQUFZLGdCQUFnQjtJQUV4QixpQkFBaUI7SUFDakIsaUVBQWEsQ0FBQTtJQUViLGNBQWM7SUFDZCxtREFBTSxDQUFBO0lBRU4sY0FBYztJQUNkLG1EQUFNLENBQUE7SUFFTixZQUFZO0lBQ1osbURBQU0sQ0FBQTtJQUVOLGFBQWE7SUFDYixtREFBTSxDQUFBO0lBRU4sYUFBYTtJQUNiLHdEQUFTLENBQUE7SUFFVCwwQkFBMEI7SUFDMUIsMERBQVUsQ0FBQTtJQUVWLGlCQUFpQjtJQUNqQixzREFBUSxDQUFBO0lBRVIsOEJBQThCO0lBQzlCLCtEQUFhLENBQUE7SUFFYix5QkFBeUI7SUFDekIseURBQVUsQ0FBQTtJQUVWLDBCQUEwQjtJQUMxQix5REFBVSxDQUFBO0lBRVYsc0JBQXNCO0lBQ3RCLDREQUFZLENBQUE7SUFFWixnQkFBZ0I7SUFDaEIsNERBQVksQ0FBQTtJQUVaLG1CQUFtQjtJQUNuQixnRUFBYyxDQUFBO0lBRWQsc0JBQXNCO0lBQ3RCLDREQUFZLENBQUE7QUFFaEIsQ0FBQyxFQS9DVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBK0MzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgR2VuZXJhbCBSZXNvdXJjZSBUeXBlIChBdHRyaWJ1dGVzIGJpdCBtYXNrKSBcbiovXG5leHBvcnQgZW51bSBSZXNvdXJjZVR5cGVNYXNrIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU2luZ2xlIFsxXSBcbiAgICBQMSA9IDEsXG4gXG4gICAgLy8gRG91YmxlIFsyXSBcbiAgICBQMiA9IDIsXG4gXG4gICAgLy8gUXVhZCBbNF0gXG4gICAgUDQgPSA0LFxuIFxuICAgIC8vIEVpZ2h0IFs4XSBcbiAgICBQOCA9IDgsXG4gXG4gICAgLy8gV2lkZSBbMTZdIFxuICAgIFdJREUgPSAxNixcbiBcbiAgICAvLyBTY3VsbGluZyAoMiBvYXJzKSBbMzJdIFxuICAgIFNDVUxMID0gMzIsXG4gXG4gICAgLy8gTmVlZCBDb3ggWzY0XSBcbiAgICBDT1ggPSA2NCxcbiBcbiAgICAvLyBDb2FzdGFsICh1c2UgaW4gc2VhKSBbMTI4XSBcbiAgICBDT0FTVEFMID0gMTI4LFxuIFxuICAgIC8vIEZvciBjb21wZXRpdGlvbiBbMjU0XSBcbiAgICBDT01QID0gMjU0LFxuIFxuICAgIC8vIEZvciBwYXJhLW9seW1waWMgWzUxMl0gXG4gICAgUEFSQSA9IDUxMixcbiBcbiAgICAvLyBSb3dpbmcgQm9hdCBbMTAyNF0gXG4gICAgUkJPQVQgPSAxMDI0LFxuIFxuICAgIC8vIEtheWFrIFsyMDQ4XSBcbiAgICBLQVlBSyA9IDIwNDgsXG4gXG4gICAgLy8gU3VyZiBTa2kgWzQwOTZdIFxuICAgIFNVUkZTS0kgPSA0MDk2LFxuIFxuICAgIC8vIFdhdmVzIEtheWFrIFs4MTkyXSBcbiAgICBXQVZFUyA9IDgxOTIsXG4gXG59Il19