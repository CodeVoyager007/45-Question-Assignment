var GuestList = ["Farkhanda", "Fatima", "Ramla", "Aruj"];
console.log("Invitation Messages:");
GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us."));
});
