Barbers = {};
BarbershopsList = {};
/**
 * If type of a user is not the Customer redirect to page
 */
if (localStorage.getItem('type') === "Barber") {
    Logout(null);
    window.location.replace("BarberPanel.html");
}
if (localStorage.getItem('type') !== "Customer") {
    Logout(null);
    window.location.replace("index.html");
}

/**
 *When Page is ready send Panel request for upcoming appointments
 *
 */
$(document).ready(function () {
    Panel.MyAppointments(AppointmentsCallback);
    Panel.ListBarbers(GetBarbersCallback);
    ProfileDisplay();
});


function GetBarbersCallback(response) {
    Barbers = JSON.parse(response);
    for (i = 0; i < Barbers.length; i++) {
        if (Barbers[i].BarberName != null) {
            $('#SelectBarber').append('<option value="' + Barbers[i].BarberID + '">' + Barbers[i].BarberName + '</option>')
        }
    }
}


BarberFreeTimes = [];

/*/
If User selects a value for barber select Open date
 */
function BarberSelect() {
    if ($('#SelectBarber').val() != "") {
        $('#AppointmentDate').show();
    }
}


function CheckDate() {
    if (validation.CheckDate(document.getElementById("AppointmentDate").value)) {
        $('#SetAppointmentError').text("");
        $('#AppointmentTime').show();
        $('#SetAppointmentError').text("loading available times");
        Panel.GetBarberFreeTime($('#SelectBarber').val(), document.getElementById("AppointmentDate").value, GetFreeTimeCallback);
    } else {
        $('#AppointmentTime').hide();
        $('#SetAppointmentError').text("Must be in furture s");
    }
}

//TODO time function
function SetAppointmentWithBarber() {
    if (validation.CheckHour(document.getElementById("AppointmentTime").value.split(":")[0])) {
        $('#SetAppointmentError').text("");
        time = document.getElementById("AppointmentTime").value + ":00";
        Panel.SetAppointment($('#SelectBarber').val(), 1, document.getElementById("AppointmentDate").value, time, SetAppointmentCallback)
    } else {
        $('#SetAppointmentError').text("Has to be between 7AM and 6PM");
    }

}

/**
 * Calls the API to find out what avaible times there are with the Barber
 * Then pushes it to a array
 * @param response
 * @constructor
 */
function GetFreeTimeCallback(response) {

    $('#SetAppointmentError').text("");
    $('#AppointmentTime').css("pointer-events", "auto");
    try {
        for (i = 0; i > response.length; i++) {
            if (response[i].StartTime != null) {
                BarberFreeTimes.push(response[i]);
            }
        }
    } catch (Exception) {
        console.log("Could not parse JSON reponse")
    }
}

function SetAppointmentCallback(response) {
    alert(response);
    try {
        response = JSON.parse(response);
        if (response.success === true) {
            Panel.MyAppointments(AppointmentsCallback);
            Panel.ListBarbers(GetBarbersCallback);
            document.getElementById("AppointmentDate").value = "";
            document.getElementById("AppointmentDate").value = "";
            $('#SetAppointmentError').text("Can only set one appointment per day.");
        } else {
            $('#SetAppointmentError').text(response.error);
        }
    } catch (E) {
        console.log("Cannot parse response in SetAppointmentCallback")
    }


}
