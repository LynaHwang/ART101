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
    message = message + "<p>I am an " + cowbutton.species + ".</p>";count = count + 1;
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);



function askNumber(whatNumber) {
    let userNumber = prompt("Rate the Cows 1/10?");

    if (userNumber == whatNumber) {
        $("#output").html("MOO!!!");
     }
    else {
        $("#output").html("MOO MOO MOO!!!");
    }
}

$("#good-button").click(function () {
    askNumber(5);
});


});



let following = false;

$("#cow").click(function () {
  $(this).toggleClass("transformed");
  $("#status").text("The Cow is changing.");
});

$("#cow").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
    $("#status").text("The Cow is thinking hard.");
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
    $("#status").text("The thought disappeared.");
  }
);

$(document).keydown(function (event) {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();

    following = !following;
    $("#cow").toggleClass("following");

    if (following === true) {
      $("#status").text("The Cow wants to follow");
    } else {
      $("#status").text("The Cow stopped following you.");
    }
  }
});

$(document).mousemove(function (event) {
  if (following === true) {
    $("#cow").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });
  }
});