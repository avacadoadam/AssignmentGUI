
function AdminLogin(email,passwd,callback){

    $.post(
        ParseUrl("Admin.php"),
        {
            action:"LogIn",
            email:email,
            passwd:passwd
        },
        callback
    );
}

function AdminCreateAccount(fname,lname,email,passwd,callback) {
    $.post(
          ParseUrl("Admin.php"),
        {
            action:"CreateAnotherAdmin",
            lname:lname,
            fname:fname,
            email:email,
            passwd:passwd
        },
        callback
    );
}

function AdminCancelAppointment(AppointmentID,callback) {
      $.post(
          ParseUrl("Admin.php"),
        {
            action:"CancelAppointment",
            AppointmentID:AppointmentID
        },
        callback
    );

}

function GetAppointments(AmountOfAppointment,callback) {
      $.post(
          ParseUrl("Admin.php"),
        {
            action:"GetAppointments",
            AmountOfAppointments:AmountOfAppointment
        },
        callback
    );
}

function GetUnapprovedBarbers(callback){
    $.post(
        ParseUrl("Admin.php"),
        {
            action:"BarbersWaitingApproval"
        },
        callback
    )
}

function Approve(BarberID,callback){
    $.post(
        ParseUrl("Admin.php"),
        {
            action:"ApproveBarber",
            BarberID:BarberID
        },
        callback
    )
}

function CustomerComplaints(callback){
  $.post(
        ParseUrl("Admin.php"),
        {
            action:"GetCustomerComplaints"
        },
        callback
    )
}

function BarberComplaints(callback){
  $.post(
        ParseUrl("Admin.php"),
        {
            action:"GetBarberComplaints"
        },
        callback
    )
}
