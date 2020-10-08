var email = "jonsp14@gmail.com";
var modal = $(".modal");


$("#email").on("click", function(){
    var subject = 'Portfolio Site';

    window.location = "mailto:"+email+"?subject="+subject;
});

$(".btn-primary").on("click", function(event){
event.preventDefault();
    console.log($("#nameContact").val());
    if($("#nameContact").val() == ""){
        modal.attr("style", "display: block");
        $("#modalText").text("Please enter your name");
        return console.log("no text name");
    }else if($("#emailContact").val() == ""){
        modal.attr("style", "display: block");
        $("#modalText").text("Please enter your email");
        return console.log("no text email");
    }else if($("#messageContact").val() == ""){
        modal.attr("style", "display: block");
        $("#modalText").text("Please enter a message");
        return console.log("no text message");
    }
    modal.attr("style", "display: block");
    $("#modalText").text("Thank You!");
    var subject = 'Portfolio Site';
    var message = $("#messageContact").text();
    // window.location = "mailto:"+email+"?subject="+subject+"&body="+message;
    $("#nameContact").val("");
    $("#emailContact").val("");
    $("#messageContact").val("");

});

$("#close").on("click", function(){
    modal.attr("style", "display: none");
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.attr("style", "display: none");
    }
  }