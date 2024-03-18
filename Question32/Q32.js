// let current_users: string[] = ['Ayesha', 'Emaan', 'Mryam', 'admin2', 'Farkhanda'];
// let new_users: string[] = ['Ramla', 'Alithia', 'Fatima', 'Sarah', 'admin'];
// function isUsernameTaken(username: string): boolean {
//     return current_users.some(user => user.toLowerCase() === username.toLowerCase());
// }
// // Loop  to check for availability
// function checkUsernames(): void {
//     for (let newUser of new_users) {
//         if (isUsernameTaken(newUser)) {
//             console.log(`Sorry, ${newUser} is already taken. Please choose a different username.`);
//         } else {
//             console.log(`Congratulations! ${newUser} is available.`);
//         }
//     }
// }
// checkUsernames();
var current_users = ["Ayesha", "admin", "Maryam", "Emaan"];
var new_users = ["Ramla", "Alithia", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
