/**
 * Will handle displaying appointments to A <ul> element with the ID of Appointments
 * In <li> tag
 * AppointmentsMessage Will display errors or other information
 */



/**
 * AppointmentsCallback(response)
 * gets called when the response from the database about upcoming appointments comes in
 * Will return a json and if success is true parse a list-group-child with related info
 * if not display reason why
 */
function AppointmentsCallback(response) {
    try {
        let json = JSON.parse(response);
        if (json[0].success === false) {
            if (json.error === "Must log in") {
                window.location.replace("index.html");
            }
            $('#AppointmentsMessage').text(json.error);
        } else {

            for (i = 0; i < json.length; i++) {
                if (json[i].BarberName != null) {
                    $('#Appointments').append('<li id="Appointment' + json[i].id + '" class="list-group-item">\n' +
                        '                <div class="row">\n' +
                        '                <span class="col-4">Barber Name: '+json[i].BarberName+'</span>\n' +
                        '                <span class="col-2"></span>\n' +
                        '                <span class="col-4">BaberShop: '+json[i].Barbershop+'</span>\n' +
                        '                </div>\n' +
                        '                <div class="row">\n' +
                        '                <span class="col-4">Date and Time: '+json[i].Date + ' ' + json[i].Time+'</span>\n' +
                        '                <span class="col-2"></span>\n' +
                        '                <button class="col-4" onclick="CancelAppointment('+json[i].id+')">Cancel</button>\n' +
                        '                </div>\n' +
                        '                </li>');
                }
            }
        }
    } catch (Exception) {
        $('#AppointmentsMessage').text("No Appointments");
    }
}