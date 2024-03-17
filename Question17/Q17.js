var initialGuestList = ["Farkhanda", "Fatima", "Ramla", "Alitha", "Aruj"];
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two guests.");
while (initialGuestList.length > 2) {
    var removedGuest = initialGuestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
console.log("\nYou guys are still invited:");
initialGuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner. Please join us on Monday at 8:00."));
});
initialGuestList.splice(-2);
