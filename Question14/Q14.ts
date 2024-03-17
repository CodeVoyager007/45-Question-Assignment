let GuestList: string[] = ["Farkhanda", "Fatima", "Ramla", "Aruj"];

console.log( "Invitation Messages:");
GuestList.forEach((guest: any) => {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us.`);
});