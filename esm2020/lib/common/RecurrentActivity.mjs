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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50QWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9SZWN1cnJlbnRBY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxpQkFBaUI7SUF5QzFCLFlBQVksR0FBWSxFQUFFLFNBQXlCLEVBQUUsU0FBa0IsRUFBRSxPQUFnQixFQUFFLElBQWEsRUFBRSxXQUFvQixFQUFFLFdBQXFCLEVBQUUsY0FBbUMsRUFBRSxVQUE4QixFQUFFLE9BQTRCLEVBQUUsS0FBYyxFQUFFLElBQWEsRUFBRSxTQUFrQjtRQUN2UyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERheU9mV2Vla0NvZGUgfSBmcm9tICcuLi9lbnVtcy9EYXlPZldlZWtDb2RlJztcbmltcG9ydCB7IFJlc291cmNlVHlwZU1hc2sgfSBmcm9tICcuLi9lbnVtcy9SZXNvdXJjZVR5cGVNYXNrJztcbmltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5pbXBvcnQgeyBCb29raW5nT3B0aW9uc01hc2sgfSBmcm9tICcuLi9lbnVtcy9Cb29raW5nT3B0aW9uc01hc2snO1xuXG4vKiBcbiAqICBSZWN1cnJlbnQgYWN0aXZpdHlcbiovXG5leHBvcnQgY2xhc3MgUmVjdXJyZW50QWN0aXZpdHkge1xuIFxuICAgIC8vIE1heCBwYXJ0aWNpcGFudHMgaW4gdGhlIGFjdGl2aXR5IFxuICAgIHB1YmxpYyBrZXk6IG51bWJlcjtcbiBcbiAgICAvLyBEYXkgb2Ygd2VlayAtIGJhc2VkIG9uIElTTzg2MDEgXG4gICAgcHVibGljIGRheU9mV2VlazogRGF5T2ZXZWVrQ29kZTtcbiBcbiAgICAvLyBTdGFydCB0aW1lIFswMDowMCBBY2NvdW50IFRpbWV6b25lXSBcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gRW5kIHRpbWUgWzAwOjAwIEFjY291bnQgVGltZXpvbmVdIFxuICAgIHB1YmxpYyBlbmRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gTmFtZSBvZiB0aGUgYWN0aXZpdHkgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY3Rpdml0eSBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBJZiB0cnVlLCBubyBhcHByb3ZhbCBmb3IgcmVzb3VyY2UgYWxsb2NhdGlvbiBpcyByZXF1aXJlZCBcbiAgICBwdWJsaWMgYXV0b0FwcHJvdmU6IGJvb2xlYW47XG4gXG4gICAgLy8gQWN0aXZpdHkgaXMgcmVzdHJpY3RlZCB0byBzcGVjaWZpYyByZXNvdXJjZSB0eXBlIFxuICAgIHB1YmxpYyByZXNvdXJjZUZpbHRlcjogUmVzb3VyY2VUeXBlTWFza1tdO1xuIFxuICAgIC8vIEFjdGl2aXR5IGlzIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgcm9sZSAobWVtYmVycywgcGFyYSwgdGVhbSkgXG4gICAgcHVibGljIHJvbGVGaWx0ZXI6IEFjY291bnRSb2xlQ29kZVtdO1xuIFxuICAgIC8vIEJvb2tpbmcgb3B0aW9ucyBcbiAgICBwdWJsaWMgb3B0aW9uczogQm9va2luZ09wdGlvbnNNYXNrO1xuIFxuICAgIC8vIE1heCBwYXJ0aWNpcGFudHMgaW4gdGhlIGFjdGl2aXR5IFxuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xuIFxuICAgIC8vIEFjdGl2aXR5IGljb24gXG4gICAgcHVibGljIGljb246IHN0cmluZztcbiBcbiAgICAvLyBBY3Rpdml0eSBpY29uIGNvbG9yIFxuICAgIHB1YmxpYyBpY29uQ29sb3I6IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3RvcihrZXk/OiBudW1iZXIsIGRheU9mV2Vlaz86IERheU9mV2Vla0NvZGUsIHN0YXJ0VGltZT86IHN0cmluZywgZW5kVGltZT86IHN0cmluZywgbmFtZT86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcsIGF1dG9BcHByb3ZlPzogYm9vbGVhbiwgcmVzb3VyY2VGaWx0ZXI/OiBSZXNvdXJjZVR5cGVNYXNrW10sIHJvbGVGaWx0ZXI/OiBBY2NvdW50Um9sZUNvZGVbXSwgb3B0aW9ucz86IEJvb2tpbmdPcHRpb25zTWFzaywgbGltaXQ/OiBudW1iZXIsIGljb24/OiBzdHJpbmcsIGljb25Db2xvcj86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuZGF5T2ZXZWVrID0gZGF5T2ZXZWVrO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmF1dG9BcHByb3ZlID0gYXV0b0FwcHJvdmU7XG4gICAgICAgIHRoaXMucmVzb3VyY2VGaWx0ZXIgPSByZXNvdXJjZUZpbHRlcjtcbiAgICAgICAgdGhpcy5yb2xlRmlsdGVyID0gcm9sZUZpbHRlcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5saW1pdCA9IGxpbWl0O1xuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgICAgICB0aGlzLmljb25Db2xvciA9IGljb25Db2xvcjtcbiAgICB9XG5cbn1cblxuXG4vKlxuICogIEludGVyZmFjZSBvZiBSZWN1cnJlbnRBY3Rpdml0eVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVJlY3VycmVudEFjdGl2aXR5IHtcbiBcbiAgICAvLyBNYXggcGFydGljaXBhbnRzIGluIHRoZSBhY3Rpdml0eSBcbiAgICBrZXk/OiBudW1iZXI7XG4gXG4gICAgLy8gRGF5IG9mIHdlZWsgLSBiYXNlZCBvbiBJU084NjAxIFxuICAgIGRheU9mV2Vlaz86IERheU9mV2Vla0NvZGU7XG4gXG4gICAgLy8gU3RhcnQgdGltZSBbMDA6MDAgQWNjb3VudCBUaW1lem9uZV0gXG4gICAgc3RhcnRUaW1lPzogc3RyaW5nO1xuIFxuICAgIC8vIEVuZCB0aW1lIFswMDowMCBBY2NvdW50IFRpbWV6b25lXSBcbiAgICBlbmRUaW1lPzogc3RyaW5nO1xuIFxuICAgIC8vIE5hbWUgb2YgdGhlIGFjdGl2aXR5IFxuICAgIG5hbWU/OiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0aXZpdHkgZGVzY3JpcHRpb24gXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gXG4gICAgLy8gSWYgdHJ1ZSwgbm8gYXBwcm92YWwgZm9yIHJlc291cmNlIGFsbG9jYXRpb24gaXMgcmVxdWlyZWQgXG4gICAgYXV0b0FwcHJvdmU/OiBib29sZWFuO1xuIFxuICAgIC8vIEFjdGl2aXR5IGlzIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgcmVzb3VyY2UgdHlwZSBcbiAgICByZXNvdXJjZUZpbHRlcj86IFJlc291cmNlVHlwZU1hc2tbXTtcbiBcbiAgICAvLyBBY3Rpdml0eSBpcyByZXN0cmljdGVkIHRvIHNwZWNpZmljIHJvbGUgKG1lbWJlcnMsIHBhcmEsIHRlYW0pIFxuICAgIHJvbGVGaWx0ZXI/OiBBY2NvdW50Um9sZUNvZGVbXTtcbiBcbiAgICAvLyBCb29raW5nIG9wdGlvbnMgXG4gICAgb3B0aW9ucz86IEJvb2tpbmdPcHRpb25zTWFzaztcbiBcbiAgICAvLyBNYXggcGFydGljaXBhbnRzIGluIHRoZSBhY3Rpdml0eSBcbiAgICBsaW1pdD86IG51bWJlcjtcbiBcbiAgICAvLyBBY3Rpdml0eSBpY29uIFxuICAgIGljb24/OiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0aXZpdHkgaWNvbiBjb2xvciBcbiAgICBpY29uQ29sb3I/OiBzdHJpbmc7XG4gXG59XG4iXX0=