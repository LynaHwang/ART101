let count=0;
let colors=["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click( function(){
    
    

    $("#needy-button").html("you clicked me " + count + " and your favourite color today is: " + colors[count] );

    $("#needy-button").css( "background-color", colors[count]);  

    count = count +1;

    $("html").css( "background-color", colors[count]);

    

});