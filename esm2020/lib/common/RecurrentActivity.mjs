/*
 *  Recurrent activity
*/
export class RecurrentActivity {
    constructor(key, dayOfWeek, startTime, endTime, name, description, autoApprove, resourceFilter, roleFilter, options, limit, icon, iconColor) {
        this.key = key;
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
        this.description = description;
        this.autoApprove = autoApprove;
        this.resourceFilter = resourceFilter;
        this.roleFilter = roleFilter;
        this.options = options;
        this.limit = limit;
        this.icon = icon;
        this.iconColor = iconColor;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50QWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ib29rbWUtbGliL3NyYy9saWIvY29tbW9uL1JlY3VycmVudEFjdGl2aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGlCQUFpQjtJQW1FMUIsWUFBWSxHQUFZLEVBQUUsU0FBeUIsRUFBRSxTQUFrQixFQUFFLE9BQWdCLEVBQUUsSUFBYSxFQUFFLFdBQW9CLEVBQUUsV0FBcUIsRUFBRSxjQUFtQyxFQUFFLFVBQThCLEVBQUUsT0FBNEIsRUFBRSxLQUFjLEVBQUUsSUFBYSxFQUFFLFNBQWtCO1FBQ3ZTLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBVSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBVSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBWSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBWSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBZSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBVSxDQUFDO0lBQ2hDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERheU9mV2Vla0NvZGUgfSBmcm9tICcuLi9lbnVtcy9EYXlPZldlZWtDb2RlJztcbmltcG9ydCB7IFJlc291cmNlVHlwZU1hc2sgfSBmcm9tICcuLi9lbnVtcy9SZXNvdXJjZVR5cGVNYXNrJztcbmltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5pbXBvcnQgeyBCb29raW5nT3B0aW9uc01hc2sgfSBmcm9tICcuLi9lbnVtcy9Cb29raW5nT3B0aW9uc01hc2snO1xuXG4vKiBcbiAqICBSZWN1cnJlbnQgYWN0aXZpdHlcbiovXG5leHBvcnQgY2xhc3MgUmVjdXJyZW50QWN0aXZpdHkge1xuIFxuICAgIC8vIE1heCBwYXJ0aWNpcGFudHMgaW4gdGhlIGFjdGl2aXR5IFxuICAgIFxuICAgIHB1YmxpYyBrZXk6IG51bWJlcjtcbiAgICBcbiBcbiAgICAvLyBEYXkgb2Ygd2VlayAtIGJhc2VkIG9uIElTTzg2MDEgXG4gICAgXG4gICAgcHVibGljIGRheU9mV2VlazogRGF5T2ZXZWVrQ29kZTtcbiAgICBcbiBcbiAgICAvLyBTdGFydCB0aW1lIFswMDowMCBBY2NvdW50IFRpbWV6b25lXSBcbiAgICBcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gRW5kIHRpbWUgWzAwOjAwIEFjY291bnQgVGltZXpvbmVdIFxuICAgIFxuICAgIHB1YmxpYyBlbmRUaW1lOiBzdHJpbmc7XG4gICAgXG4gXG4gICAgLy8gTmFtZSBvZiB0aGUgYWN0aXZpdHkgXG4gICAgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBBY3Rpdml0eSBkZXNjcmlwdGlvbiBcbiAgICBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBJZiB0cnVlLCBubyBhcHByb3ZhbCBmb3IgcmVzb3VyY2UgYWxsb2NhdGlvbiBpcyByZXF1aXJlZCBcbiAgICBcbiAgICBwdWJsaWMgYXV0b0FwcHJvdmU6IGJvb2xlYW47XG4gICAgXG4gXG4gICAgLy8gQWN0aXZpdHkgaXMgcmVzdHJpY3RlZCB0byBzcGVjaWZpYyByZXNvdXJjZSB0eXBlIFxuICAgIFxuICAgIHB1YmxpYyByZXNvdXJjZUZpbHRlcjogUmVzb3VyY2VUeXBlTWFza1tdO1xuICAgIFxuIFxuICAgIC8vIEFjdGl2aXR5IGlzIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgcm9sZSAobWVtYmVycywgcGFyYSwgdGVhbSkgXG4gICAgXG4gICAgcHVibGljIHJvbGVGaWx0ZXI6IEFjY291bnRSb2xlQ29kZVtdO1xuICAgIFxuIFxuICAgIC8vIEJvb2tpbmcgb3B0aW9ucyBcbiAgICBcbiAgICBwdWJsaWMgb3B0aW9uczogQm9va2luZ09wdGlvbnNNYXNrO1xuICAgIFxuIFxuICAgIC8vIE1heCBwYXJ0aWNpcGFudHMgaW4gdGhlIGFjdGl2aXR5IFxuICAgIFxuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xuICAgIFxuIFxuICAgIC8vIEFjdGl2aXR5IGljb24gXG4gICAgXG4gICAgcHVibGljIGljb246IHN0cmluZztcbiAgICBcbiBcbiAgICAvLyBBY3Rpdml0eSBpY29uIGNvbG9yIFxuICAgIFxuICAgIHB1YmxpYyBpY29uQ29sb3I6IHN0cmluZztcbiAgICBcbiBcbiAgICBjb25zdHJ1Y3RvcihrZXk/OiBudW1iZXIsIGRheU9mV2Vlaz86IERheU9mV2Vla0NvZGUsIHN0YXJ0VGltZT86IHN0cmluZywgZW5kVGltZT86IHN0cmluZywgbmFtZT86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcsIGF1dG9BcHByb3ZlPzogYm9vbGVhbiwgcmVzb3VyY2VGaWx0ZXI/OiBSZXNvdXJjZVR5cGVNYXNrW10sIHJvbGVGaWx0ZXI/OiBBY2NvdW50Um9sZUNvZGVbXSwgb3B0aW9ucz86IEJvb2tpbmdPcHRpb25zTWFzaywgbGltaXQ/OiBudW1iZXIsIGljb24/OiBzdHJpbmcsIGljb25Db2xvcj86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5rZXkgPSBrZXkhO1xuICAgICAgICB0aGlzLmRheU9mV2VlayA9IGRheU9mV2VlayE7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lITtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZSE7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUhO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24hO1xuICAgICAgICB0aGlzLmF1dG9BcHByb3ZlID0gYXV0b0FwcHJvdmUhO1xuICAgICAgICB0aGlzLnJlc291cmNlRmlsdGVyID0gcmVzb3VyY2VGaWx0ZXIhO1xuICAgICAgICB0aGlzLnJvbGVGaWx0ZXIgPSByb2xlRmlsdGVyITtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyE7XG4gICAgICAgIHRoaXMubGltaXQgPSBsaW1pdCE7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb24hO1xuICAgICAgICB0aGlzLmljb25Db2xvciA9IGljb25Db2xvciE7XG4gICAgfVxuXG59XG5cblxuLypcbiAqICBJbnRlcmZhY2Ugb2YgUmVjdXJyZW50QWN0aXZpdHlcbiovXG5leHBvcnQgaW50ZXJmYWNlIElSZWN1cnJlbnRBY3Rpdml0eSB7XG4gXG4gICAgLy8gTWF4IHBhcnRpY2lwYW50cyBpbiB0aGUgYWN0aXZpdHkgXG4gICAga2V5PzogbnVtYmVyO1xuIFxuICAgIC8vIERheSBvZiB3ZWVrIC0gYmFzZWQgb24gSVNPODYwMSBcbiAgICBkYXlPZldlZWs/OiBEYXlPZldlZWtDb2RlO1xuIFxuICAgIC8vIFN0YXJ0IHRpbWUgWzAwOjAwIEFjY291bnQgVGltZXpvbmVdIFxuICAgIHN0YXJ0VGltZT86IHN0cmluZztcbiBcbiAgICAvLyBFbmQgdGltZSBbMDA6MDAgQWNjb3VudCBUaW1lem9uZV0gXG4gICAgZW5kVGltZT86IHN0cmluZztcbiBcbiAgICAvLyBOYW1lIG9mIHRoZSBhY3Rpdml0eSBcbiAgICBuYW1lPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjdGl2aXR5IGRlc2NyaXB0aW9uIFxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuIFxuICAgIC8vIElmIHRydWUsIG5vIGFwcHJvdmFsIGZvciByZXNvdXJjZSBhbGxvY2F0aW9uIGlzIHJlcXVpcmVkIFxuICAgIGF1dG9BcHByb3ZlPzogYm9vbGVhbjtcbiBcbiAgICAvLyBBY3Rpdml0eSBpcyByZXN0cmljdGVkIHRvIHNwZWNpZmljIHJlc291cmNlIHR5cGUgXG4gICAgcmVzb3VyY2VGaWx0ZXI/OiBSZXNvdXJjZVR5cGVNYXNrW107XG4gXG4gICAgLy8gQWN0aXZpdHkgaXMgcmVzdHJpY3RlZCB0byBzcGVjaWZpYyByb2xlIChtZW1iZXJzLCBwYXJhLCB0ZWFtKSBcbiAgICByb2xlRmlsdGVyPzogQWNjb3VudFJvbGVDb2RlW107XG4gXG4gICAgLy8gQm9va2luZyBvcHRpb25zIFxuICAgIG9wdGlvbnM/OiBCb29raW5nT3B0aW9uc01hc2s7XG4gXG4gICAgLy8gTWF4IHBhcnRpY2lwYW50cyBpbiB0aGUgYWN0aXZpdHkgXG4gICAgbGltaXQ/OiBudW1iZXI7XG4gXG4gICAgLy8gQWN0aXZpdHkgaWNvbiBcbiAgICBpY29uPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjdGl2aXR5IGljb24gY29sb3IgXG4gICAgaWNvbkNvbG9yPzogc3RyaW5nO1xuIFxufVxuIl19