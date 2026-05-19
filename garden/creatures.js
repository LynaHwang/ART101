// add creature to the garden
$("#crAdd").click( function(){

    // grab the value from the text input and assign it to a variable crName
    let crName=$("#crName").val();
    let crColor=$("#crColor").val();
    let crEyesNum=$("#crEyesNum").val();

    // test in console
    console.log(crName);  
    console.log(crColor); 
    console.log(crEyesNum); 
    

    if( crName.length > 2) { 
             $("#creature-list").append(`
            <div class="creature">
                <div class="creature-body"></div>
                <div class="creature-info">${crName}</div>
            </div>
        `);+crName+crColor+crEyesNum+"</div>");
    }
   

     $("#crName").val(""); // write the value
    // $("#crName").val(); // retrieve the value

); 