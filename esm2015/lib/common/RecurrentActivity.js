/*
 *  Recurrent activity
*/
export class RecurrentActivity {
    constructor(dayOfWeek, startTime, endTime, name, resourceFilter, roleFilter) {
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
        this.name = name;
        this.resourceFilter = resourceFilter;
        this.roleFilter = roleFilter;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50QWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9SZWN1cnJlbnRBY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxpQkFBaUI7SUFvQjFCLFlBQVksU0FBeUIsRUFBRSxTQUFrQixFQUFFLE9BQWdCLEVBQUUsSUFBYSxFQUFFLGNBQWlDLEVBQUUsVUFBNEI7UUFDdkosSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF5T2ZXZWVrQ29kZSB9IGZyb20gJy4uL2VudW1zL0RheU9mV2Vla0NvZGUnO1xuaW1wb3J0IHsgUmVzb3VyY2VUeXBlTWFzayB9IGZyb20gJy4uL2VudW1zL1Jlc291cmNlVHlwZU1hc2snO1xuaW1wb3J0IHsgQWNjb3VudFJvbGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFJvbGVDb2RlJztcblxuLyogXG4gKiAgUmVjdXJyZW50IGFjdGl2aXR5XG4qL1xuZXhwb3J0IGNsYXNzIFJlY3VycmVudEFjdGl2aXR5IHtcbiBcbiAgICAvLyBEYXkgb2Ygd2VlayAtIGJhc2VkIG9uIElTTzg2MDEgXG4gICAgcHVibGljIGRheU9mV2VlazogRGF5T2ZXZWVrQ29kZTtcbiBcbiAgICAvLyBTdGFydCB0aW1lIFtudW1iZXIgb2YgbWludXRlcyBzdGFydCBmcm9tIDAwOjAwIFVUQ10gXG4gICAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyO1xuIFxuICAgIC8vIEVuZCB0aW1lIFtudW1iZXIgb2YgbWludXRlcyBzdGFydCBmcm9tIDAwOjAwIFVUQ10gXG4gICAgcHVibGljIGVuZFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBOYW1lIG9mIHRoZSBhY3Rpdml0eSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjdGl2aXR5IGlzIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgcmVzb3VyY2UgdHlwZSBcbiAgICBwdWJsaWMgcmVzb3VyY2VGaWx0ZXI6IFJlc291cmNlVHlwZU1hc2s7XG4gXG4gICAgLy8gQWN0aXZpdHkgaXMgcmVzdHJpY3RlZCB0byBzcGVjaWZpYyByb2xlIChtZW1iZXJzLCBwYXJhLCB0ZWFtKSBcbiAgICBwdWJsaWMgcm9sZUZpbHRlcjogQWNjb3VudFJvbGVDb2RlO1xuIFxuICAgIGNvbnN0cnVjdG9yKGRheU9mV2Vlaz86IERheU9mV2Vla0NvZGUsIHN0YXJ0VGltZT86IG51bWJlciwgZW5kVGltZT86IG51bWJlciwgbmFtZT86IHN0cmluZywgcmVzb3VyY2VGaWx0ZXI/OiBSZXNvdXJjZVR5cGVNYXNrLCByb2xlRmlsdGVyPzogQWNjb3VudFJvbGVDb2RlKSB7IFxuICAgICAgICB0aGlzLmRheU9mV2VlayA9IGRheU9mV2VlaztcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGVuZFRpbWU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucmVzb3VyY2VGaWx0ZXIgPSByZXNvdXJjZUZpbHRlcjtcbiAgICAgICAgdGhpcy5yb2xlRmlsdGVyID0gcm9sZUZpbHRlcjtcbiAgICB9XG5cbn1cblxuXG4vKlxuICogIEludGVyZmFjZSBvZiBSZWN1cnJlbnRBY3Rpdml0eVxuKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVJlY3VycmVudEFjdGl2aXR5IHtcbiBcbiAgICAvLyBEYXkgb2Ygd2VlayAtIGJhc2VkIG9uIElTTzg2MDEgXG4gICAgZGF5T2ZXZWVrPzogRGF5T2ZXZWVrQ29kZTtcbiBcbiAgICAvLyBTdGFydCB0aW1lIFtudW1iZXIgb2YgbWludXRlcyBzdGFydCBmcm9tIDAwOjAwIFVUQ10gXG4gICAgc3RhcnRUaW1lPzogbnVtYmVyO1xuIFxuICAgIC8vIEVuZCB0aW1lIFtudW1iZXIgb2YgbWludXRlcyBzdGFydCBmcm9tIDAwOjAwIFVUQ10gXG4gICAgZW5kVGltZT86IG51bWJlcjtcbiBcbiAgICAvLyBOYW1lIG9mIHRoZSBhY3Rpdml0eSBcbiAgICBuYW1lPzogc3RyaW5nO1xuIFxuICAgIC8vIEFjdGl2aXR5IGlzIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgcmVzb3VyY2UgdHlwZSBcbiAgICByZXNvdXJjZUZpbHRlcj86IFJlc291cmNlVHlwZU1hc2s7XG4gXG4gICAgLy8gQWN0aXZpdHkgaXMgcmVzdHJpY3RlZCB0byBzcGVjaWZpYyByb2xlIChtZW1iZXJzLCBwYXJhLCB0ZWFtKSBcbiAgICByb2xlRmlsdGVyPzogQWNjb3VudFJvbGVDb2RlO1xuIFxufVxuIl19