var magician = ["Elena", "Michael", "Sophia"];
function show_magician(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_Great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
console.log("Original list of Magician:");
show_magician(magician);
make_Great(magician);
console.log("\nModified list of Magician :");
show_magician(magician); // Shows modified names
