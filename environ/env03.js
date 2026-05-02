let environmentTitle = "Moo Meadows";

let environmentElements = ["cows", "grass", "warm breeze", "open air"];

let mainEntity = {
    name: "cows",
    type: "mammal",
    mood: "happy",
    isSupercool: true,
    favoriteElement: environmentElements[1]
};

let count = 0;

let cowbutton = {
    name: "Grass",
    species: "plant",
    moods: ["hmm", "yum", "yuck", "full"]
};

$("#cowbutton").click(function () {

    count = count + 1;
    let arrayPosition = count - 1;
    let currentMood = cowbutton.moods[arrayPosition];
    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + cowbutton.name + ".</p>";
    message = message + "<p>I am an " + cowbutton.species + ".</p>";
   

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});