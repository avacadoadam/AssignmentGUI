/**
 * Callback for complaints in json Will parse
 * @param response
 * @constructor
 */
function Complaints(response) {
            try {
            let json = JSON.parse(response);
            if (json[0].success === false) {
                if (json.error === "Must log in") {
                    window.location.replace("index.html");
                }
                $('#ComplaintsMessage').text(json.error);
            } else {
                for (i = 0; i < json.length; i++) {
                    if (json[i].complaint != null) {
                        $('#complaints').append('<li class="list-group-item">\n' +
                            '                <div class="row">\n' +
                            '                <span class="col-4">'+json[i].complaint+'</span>\n' +
                            '                <span class="col-2"></span>\n' +
                            '                </div>\n' +
                            '                </li>');
                    }
                }
            }
        } catch (Exception) {
            $('#UnApprovedBarbersMessage').text("No Appointments");
        }

    }



    /**
     *When Page is ready send Panel request for upcoming appointments
     *
     */
    $(document).ready(function () {
        GetAppointments(0, AppointmentsCallback);
        ProfileDisplay();
        GetUnapprovedBarbers(UnApprovedBarbersCallback);
        CustomerComplaints(Complaints);
        BarberComplaints(Complaints);
    });

/**
 *
 * @param AppointmentID
 * @constructor
 */
function CancelAppointment(AppointmentID) {
        document.getElementById("Appointment" + AppointmentID).remove();
        AdminCancelAppointment(AppointmentID, function () {
            $('#AppointmentsMessage').text("Appointment Canceled");
        });
    }

    $('#RegisterSubmit').click(function () {
        AdminCreateAccount($('input[name="fname"]').val(),
            $('input[name="lname"]').val(),
            $('input[name="email"]').val(),
            $('input[name="passwd"]').val(),
            CreateAccountCallback);
    });

    function CreateAccountCallback(response) {
        let json = JSON.parse(response);
        if (json.success === false) {
            $('#CreateAdminError').text(json.error);
        } else {
            $('#CreateAdminError').text("Account Created");
        }
    }

    function UnApprovedBarbersCallback(response) {
        try {
            let json = JSON.parse(response);
            if (json[0].success === false) {
                if (json.error === "Must log in") {
                    window.location.replace("index.html");
                }
                $('#UnApprovedBarbersMessage').text(json.error);
            } else {
                for (i = 0; i < json.length; i++) {
                    if (json[i].fname != null) {
                        $('#UnApprovedBarbers').append('<li id="UnApprovedBarber' + json[i].BarberID + '" class="list-group-item">\n' +
                            '                <div class="row">\n' +
                            '                <span class="col-4">Barber Name: ' + json[i].fname + " " + json[i].lname + '</span>\n' +
                            '                <span class="col-2"></span>\n' +
                            '                </div>\n' +
                            '                <div class="row">\n' +
                            '                <span class="col-4">email: ' + json[i].email + '</span>\n' +
                            '                <span class="col-2"></span>\n' +
                            '                <button class="col-4" onclick="ApprovingBarber(' + json[i].BarberID + ')">Approve Barber</button>\n' +
                            '                </div>\n' +
                            '                </li>');
                    }
                }
            }
        } catch (Exception) {
            $('#UnApprovedBarbersMessage').text("No Appointments");
        }
    }


    function ApprovingBarber(BarberID) {
        document.getElementById("UnApprovedBarber" + BarberID).remove();
        $('#UnApprovedBarbersMessage').text("Approved Barber");
        Approve(BarberID, ApproveBarberCallback);
    }

    function ApproveBarberCallback(response) {
        let json = JSON.parse(response);
        if (json.success = true) {
            $('#UnApprovedBarbersMessage').text("Barber Approved");
        } else {
            $('#UnApprovedBarbersMessage').text("Barber Couldn't be approved");
        }
    }

