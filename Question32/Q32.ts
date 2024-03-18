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
let current_users: string[] = ["Ayesha", "admin", "Maryam", "Emaan"];
let new_users: string[] = ["Ramla", "Alithia", "Ayesha", "admin", "Farkhanda"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

