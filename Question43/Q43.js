function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
//make_great function 
function Make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
// Original magicians 
var magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley"];
console.log("Original magicians:");
show_magicians(magicians);
//modified list
var greatMagicians = Make_great(magicians.slice());
console.log("Great magicians:");
show_magicians(greatMagicians);
