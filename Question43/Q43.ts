function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
//make_great function 
function Make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

// Original magicians 
let magicians: string[] = ["Harry Potter", "Hermione Granger", "Ron Weasley"];
console.log("Original magicians:");
show_magicians(magicians);
//modified list
let greatMagicians = Make_great(magicians.slice());
console.log("Great magicians:");
show_magicians(greatMagicians);
