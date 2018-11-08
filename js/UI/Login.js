
//Switches between register and login
$('.messageRegister span').click(function () {
    $('#errormessage').hide();
    $('#successmessage').hide();
    $('.login-form').hide();
    $('.register-form').show();
});

$('.messageLogin span').click(function () {
    $('.login-form').show();
    $('.register-form').hide();
});

//Callback
function RegisterCallback(response) {
    var obj = JSON.parse(response);
    if (obj.success === false) {
        $('#errormessage').show();
        $('#errormessage').text(obj.error);
    } else {
        $('#successmessage').show();
        $('#successmessage').text("Success");
    }
}

//Callback
function LoginCallback(response) {
    console.log(response);
    var obj = JSON.parse(response);
    if (obj.success === false) {
        if (obj.error === "Already Logged in") {
            AlreadyLoggedIn();
        }
        $('#errormessage').show();
        $('#errormessage').text(obj.error);
    } else {
        success(obj);
    }
}

function AlreadyLoggedIn() {
    if(localStorage.getItem('type') === "Barber"){
        window.location.replace("BarberPanel.html")
    }else if(localStorage.getItem('type') === "Customer"){
        window.location.replace("CustomerPanel.html")
    }else if(localStorage.getItem("type") === "Admin"){
        window.location.replace("AdminPanel.html")
    }
}

