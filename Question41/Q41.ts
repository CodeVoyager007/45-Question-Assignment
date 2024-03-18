function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

const magicians: string[] = ['Harry Potter','Hermione Granger', 'Ron Weasley'];

console.log("List of Magicians:");
show_magicians(magicians);

