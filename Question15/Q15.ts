let new_GuestList: string[] = ["Farkhanda", "Fatima", "Ramla", "Alitha" ,"Aruj"];


let guestWhoCantMakeIt = "Aruj";
let newGuest = "Aneesa";

// Print the guest who can't make it
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} cannot make it to dinner.`);

// Replace the guest who can't make it with the new guest
let indexToRemove = new_GuestList.indexOf(guestWhoCantMakeIt);
if (indexToRemove !== -1) {
    new_GuestList.splice(indexToRemove, 1, newGuest);
}

// Print updated invitation messages
console.log("\nUpdated Invitation Messages:");
new_GuestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us.`);
});