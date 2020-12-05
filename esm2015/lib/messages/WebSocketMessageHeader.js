/*
 *  @WebSocketMessage Message header for all web socket messages
*/
export class WebSocketMessageHeader {
    constructor(opcode, version, messageId, correlationId, sessionId) {
        this.op = opcode;
        this.ver = version;
        this.id = messageId;
        this.cid = correlationId;
        this.sid = sessionId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0TWVzc2FnZUhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvV2ViU29ja2V0TWVzc2FnZUhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxzQkFBc0I7SUFpQi9CLFlBQVksTUFBZSxFQUFFLE9BQWdCLEVBQUUsU0FBa0IsRUFBRSxhQUFzQixFQUFFLFNBQWtCO1FBQ3pHLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogXG4gKiAgQFdlYlNvY2tldE1lc3NhZ2UgTWVzc2FnZSBoZWFkZXIgZm9yIGFsbCB3ZWIgc29ja2V0IG1lc3NhZ2VzXG4qL1xuZXhwb3J0IGNsYXNzIFdlYlNvY2tldE1lc3NhZ2VIZWFkZXIge1xuIFxuICAgIC8vIFxuICAgIHB1YmxpYyBvcDogbnVtYmVyO1xuIFxuICAgIC8vIFxuICAgIHB1YmxpYyB2ZXI6IG51bWJlcjtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgY2lkOiBudW1iZXI7XG4gXG4gICAgLy8gXG4gICAgcHVibGljIHNpZDogc3RyaW5nO1xuIFxuICAgIGNvbnN0cnVjdG9yKG9wY29kZT86IG51bWJlciwgdmVyc2lvbj86IG51bWJlciwgbWVzc2FnZUlkPzogbnVtYmVyLCBjb3JyZWxhdGlvbklkPzogbnVtYmVyLCBzZXNzaW9uSWQ/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMub3AgPSBvcGNvZGU7XG4gICAgICAgIHRoaXMudmVyID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5pZCA9IG1lc3NhZ2VJZDtcbiAgICAgICAgdGhpcy5jaWQgPSBjb3JyZWxhdGlvbklkO1xuICAgICAgICB0aGlzLnNpZCA9IHNlc3Npb25JZDtcbiAgICB9XG5cbn1cblxuXG4vKlxuICogIEludGVyZmFjZSBvZiBXZWJTb2NrZXRNZXNzYWdlSGVhZGVyXG4qL1xuZXhwb3J0IGludGVyZmFjZSBJV2ViU29ja2V0TWVzc2FnZUhlYWRlciB7XG4gXG4gICAgLy8gXG4gICAgb3A/OiBudW1iZXI7XG4gXG4gICAgLy8gXG4gICAgdmVyPzogbnVtYmVyO1xuIFxuICAgIC8vIFxuICAgIGlkPzogbnVtYmVyO1xuIFxuICAgIC8vIFxuICAgIGNpZD86IG51bWJlcjtcbiBcbiAgICAvLyBcbiAgICBzaWQ/OiBzdHJpbmc7XG4gXG59XG4iXX0=