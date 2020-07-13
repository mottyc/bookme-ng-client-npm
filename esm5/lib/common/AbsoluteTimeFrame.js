/*
   Schedule time frame
   Times are described in ISO 8601 format (See: https://www.w3.org/TR/NOTE-datetime).
   The format is: YYYY-MM-DDThh:mm:ssTZD where:
   <ul>
   <li>YYYY = four-digit year</li>
   <li>MM   = two-digit month (01=January, etc.)</li>
   <li>DD   = two-digit day of month (01 through 31)</li>
   <li>hh   = two digits of hour (00 through 23) (am/pm NOT allowed)</li>
   <li>mm   = two digits of minute (00 through 59)</li>
   <li>ss   = two digits of second (00 through 59)
   <li>TZD  = time zone designator (Z for UTC or +hh:mm or -hh:mm for Timezone offset)</li>
   </ul>
*/
var AbsoluteTimeFrame = /** @class */ (function () {
    function AbsoluteTimeFrame(name, startTime, endTime, active) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.active = active;
    }
    return AbsoluteTimeFrame;
}());
export { AbsoluteTimeFrame };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzb2x1dGVUaW1lRnJhbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbW90dHljL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9BYnNvbHV0ZVRpbWVGcmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7Ozs7Ozs7OztFQWFFO0FBQ0Y7SUFjSSwyQkFBWSxJQUFhLEVBQUUsU0FBa0IsRUFBRSxPQUFnQixFQUFFLE1BQWdCO1FBQzdFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFxuICAgU2NoZWR1bGUgdGltZSBmcmFtZVxuICAgVGltZXMgYXJlIGRlc2NyaWJlZCBpbiBJU08gODYwMSBmb3JtYXQgKFNlZTogaHR0cHM6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWUpLlxuICAgVGhlIGZvcm1hdCBpczogWVlZWS1NTS1ERFRoaDptbTpzc1RaRCB3aGVyZTpcbiAgIDx1bD5cbiAgIDxsaT5ZWVlZID0gZm91ci1kaWdpdCB5ZWFyPC9saT5cbiAgIDxsaT5NTSAgID0gdHdvLWRpZ2l0IG1vbnRoICgwMT1KYW51YXJ5LCBldGMuKTwvbGk+XG4gICA8bGk+REQgICA9IHR3by1kaWdpdCBkYXkgb2YgbW9udGggKDAxIHRocm91Z2ggMzEpPC9saT5cbiAgIDxsaT5oaCAgID0gdHdvIGRpZ2l0cyBvZiBob3VyICgwMCB0aHJvdWdoIDIzKSAoYW0vcG0gTk9UIGFsbG93ZWQpPC9saT5cbiAgIDxsaT5tbSAgID0gdHdvIGRpZ2l0cyBvZiBtaW51dGUgKDAwIHRocm91Z2ggNTkpPC9saT5cbiAgIDxsaT5zcyAgID0gdHdvIGRpZ2l0cyBvZiBzZWNvbmQgKDAwIHRocm91Z2ggNTkpXG4gICA8bGk+VFpEICA9IHRpbWUgem9uZSBkZXNpZ25hdG9yIChaIGZvciBVVEMgb3IgK2hoOm1tIG9yIC1oaDptbSBmb3IgVGltZXpvbmUgb2Zmc2V0KTwvbGk+XG4gICA8L3VsPiBcbiovXG5leHBvcnQgY2xhc3MgQWJzb2x1dGVUaW1lRnJhbWUge1xuIFxuICAgIC8vIE5hbWUgb2YgdGltZSBmcmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFN0YXJ0IHRpbWUgaW4gdGhlIElTTy04NjAxIGZvcm1hdCAoWVlZWS1NTS1ERFRoaDptbTpzc1RaRCkgXG4gICAgcHVibGljIHN0YXJ0VGltZTogc3RyaW5nO1xuIFxuICAgIC8vIEVuZCB0aW1lIGluIHRoZSBJU08tODYwMSBmb3JtYXQgKFlZWVktTU0tRERUaGg6bW06c3NUWkQpIFxuICAgIHB1YmxpYyBlbmRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU3BlY2lmeSBpZiB0aGlzIHRpbWUgZnJhbWUgaXMgYWN0aXZlIFxuICAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG4gXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgc3RhcnRUaW1lPzogc3RyaW5nLCBlbmRUaW1lPzogc3RyaW5nLCBhY3RpdmU/OiBib29sZWFuKSB7IFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gICAgfVxuXG59XG5cblxuIl19