/**
 * Cancel Appointments and appointment id will be sent
 * @param appointmentID
 * @constructor
 */
function CancelAppointment(appointmentID) {
       document.getElementById("Appointment" + AppointmentID).remove();
    Panel.CancelAppointment(appointmentID, CancelAppointmentCallBack)

}

function CancelAppointmentCallBack(response) {
    Panel.MyAppointments(AppointmentsCallback);
}
