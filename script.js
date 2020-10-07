var email = "jonsp14@gmail.com";
var modal = $(".modal");


$("#email").on("click", function(){
    var subject = 'Portfolio Site';

    window.location = "mailto:"+email+"?subject="+subject;
});

$(".btn-primary").on("click", function(){
    modal.attr("style", "display: block");
    var subject = 'Portfolio Site';
    var message = $("#messageContact").text();
    window.location = "mailto:"+email+"?subject="+subject+"&body="+message;
});

$("#close").on("click", function(){
    modal.attr("style", "display: none");
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.attr("style", "display: none");
    }
  }