interface EventDetails {
    eventName: string;
    location: string;
    attendees: number;
}
let eventInfo: EventDetails = {
    eventName: "Tech Conference",
    location: "City Convention Center",
    attendees: 500,
};
console.log("Event Information:");
console.log(`Event Name: ${eventInfo.eventName}`);
console.log(`Location: ${eventInfo.location}`);
console.log(`Attendees: ${eventInfo.attendees}`);
