var new_GuestList = ["Farkhanda", "Fatima", "Ramla", "Alitha", "Aruj"];
var guestWhoCantMakeIt = "Aruj";
var newGuest = "Aneesa";
// Print the guest who can't make it
console.log("\nUnfortunately, ".concat(guestWhoCantMakeIt, " cannot make it to dinner."));
// Replace the guest who can't make it with the new guest
var indexToRemove = new_GuestList.indexOf(guestWhoCantMakeIt);
if (indexToRemove !== -1) {
    new_GuestList.splice(indexToRemove, 1, newGuest);
}
// Print updated invitation messages
console.log("\nUpdated Invitation Messages:");
new_GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us."));
});
