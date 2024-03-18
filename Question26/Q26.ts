let alien_colors: string;
alien_colors = "green";
if (alien_colors === "green") {
    console.log("You just earned 5 points for shooting the green alien!");
} else if (alien_colors === "yellow") {
    console.log("You just earned 10 points for shooting the yellow alien.");
} else if (alien_colors === "red") {
    console.log("You just earned 15 points for shooting the red alien.");
} else {
    console.log("Unknown alien color. You just earned 0 points.");
}