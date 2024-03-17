let initial_GuestList: string[] =["Farkhanda", "Fatima", "Ramla", "Alitha" ,"Aruj","Aneesa"];

// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table!");

// Add new guests to the list
initial_GuestList.unshift("Amna"); // Add at the beginning
initial_GuestList.splice(Math.floor(initial_GuestList.length / 2), 0, "Maheen"); // Add in the middle
initial_GuestList.push("Maheen"); // Add at the end

// // Print new set of invitation messages
// console.log("\nUpdated Invitation Messages:");
initial_GuestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us at 8:00 on Monday.`);
});
