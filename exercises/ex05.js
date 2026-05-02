
// rules and options for functions
let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
let colorCounter=0;
let mood="neutral";


$("#needy-button").click(function () { 
 
// indicate amount of the button
count = count + 1;
colorCount=count-1;

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );
   $("body").css("background-color", colors[colorCount]);
   
   if (colorcount==4) { 
        colorcount=0;  
        console.log("it happened");
    }

   if (colors[colorCount] == "HotPink") { 
        $("#needy-button").after(" notPink ");
    }
    else if (colors[colorCount] == "Orchid") {
            $("#needy-button").after("  hey Orchid ");
    }
    else {
      $("#needy-button").after(" all other colors ");
    }

    if (count < 5) {mood="fresh and happy";}

    if (count >= 5 && count <10) {mood="keep pushing";}

else {mood="so tired";}

    console.log(mood);

});


