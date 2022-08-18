    
 
$(document).ready(()=>{
    var scanning =   $("#spin-wrapper");
    var pwdError = $("#pass-error");
    var emailError = $("#email-error");
    var loginError = $("#login-error");
    var email = $("#user_email");
    var password = $("#user_pwd");
    var verificationSpinner = $("#verifying");
    //handle the download button click event
    $("#dl-pdf").click( (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        //Show the authentication dialog
        $("#myModal").modal({
            backdrop: 'static',
            keyboard: false,
            focus: true,
            show: true
        });
        setTimeout(() => {
            scanning.css("display", "none");
        }, 3000);
    });

   



});




