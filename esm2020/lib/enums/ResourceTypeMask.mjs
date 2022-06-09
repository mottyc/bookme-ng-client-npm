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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VUeXBlTWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jvb2ttZS1saWIvc3JjL2xpYi9lbnVtcy9SZXNvdXJjZVR5cGVNYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksZ0JBeUNYO0FBekNELFdBQVksZ0JBQWdCO0lBRXhCLGlCQUFpQjtJQUNqQixpRUFBYSxDQUFBO0lBRWIsbUJBQW1CO0lBQ25CLHlEQUFTLENBQUE7SUFFVCxhQUFhO0lBQ2IseURBQVMsQ0FBQTtJQUVULHlCQUF5QjtJQUN6Qix5REFBUyxDQUFBO0lBRVQsZ0JBQWdCO0lBQ2hCLHFEQUFPLENBQUE7SUFFUCxhQUFhO0lBQ2Isd0RBQVMsQ0FBQTtJQUVULHdCQUF3QjtJQUN4Qix3REFBUyxDQUFBO0lBRVQseUJBQXlCO0lBQ3pCLHdEQUFTLENBQUE7SUFFVCw4QkFBOEI7SUFDOUIsK0RBQWEsQ0FBQTtJQUViLGlCQUFpQjtJQUNqQixzREFBUyxDQUFBO0lBRVQsaUJBQWlCO0lBQ2pCLHNEQUFTLENBQUE7SUFFVCxlQUFlO0lBQ2Ysc0RBQVMsQ0FBQTtJQUVULGdCQUFnQjtJQUNoQixzREFBUyxDQUFBO0FBRWIsQ0FBQyxFQXpDVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBeUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgR2VuZXJhbCBSZXNvdXJjZSBUeXBlIChBdHRyaWJ1dGVzIGJpdCBtYXNrKSBcbiovXG5leHBvcnQgZW51bSBSZXNvdXJjZVR5cGVNYXNrIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gUm93aW5nIEJvYXQgWzFdIFxuICAgIFJCT0FUID0gMSxcbiBcbiAgICAvLyBLYXlhayBbMl0gXG4gICAgS0FZQUsgPSAyLFxuIFxuICAgIC8vIFNjdWxsaW5nICgyIG9hcnMpIFs0XSBcbiAgICBTQ1VMTCA9IDQsXG4gXG4gICAgLy8gTmVlZCBDb3ggWzhdIFxuICAgIENPWCA9IDgsXG4gXG4gICAgLy8gV2lkZSBbMTZdIFxuICAgIFdJREUgPSAxNixcbiBcbiAgICAvLyBGb3IgY29tcGV0aXRpb24gWzMyXSBcbiAgICBDT01QID0gMzIsXG4gXG4gICAgLy8gRm9yIHBhcmEtb2x5bXBpYyBbNjRdIFxuICAgIFBBUkEgPSA2NCxcbiBcbiAgICAvLyBDb2FzdGFsICh1c2UgaW4gc2VhKSBbMTI4XSBcbiAgICBDT0FTVEFMID0gMTI4LFxuIFxuICAgIC8vIFNpbmdsZSBbMTAyNF0gXG4gICAgUDEgPSAxMDI0LFxuIFxuICAgIC8vIERvdWJsZSBbMjA0OF0gXG4gICAgUDIgPSAyMDQ4LFxuIFxuICAgIC8vIFF1YWQgWzQwOTZdIFxuICAgIFA0ID0gNDA5NixcbiBcbiAgICAvLyBFaWdodCBbODE5Ml0gXG4gICAgUDggPSA4MTkyLFxuIFxufSJdfQ==