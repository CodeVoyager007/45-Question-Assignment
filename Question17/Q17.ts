let initialGuestList: string[] = ["Farkhanda", "Fatima", "Ramla", "Alitha" ,"Aruj"];
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two guests.");
while (initialGuestList.length > 2) {
    const removedGuest = initialGuestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
console.log("\nYou guys are still invited:");
initialGuestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us on Monday at 8:00.`);
});
initialGuestList.splice(-2);

