var Panel = {

    MyAppointments: function (MyAppointmentsCallback) {
        $.post(
            ParseUrl("GetAppointments.php"),
            {
                action: "GetMyAppointment"
            },
            MyAppointmentsCallback
        );
    },

    GetBarberFreeTime: function (BarberID, Date, BarberFreeTimeCallback) {
        console.log(Date);
        $.post(
            ParseUrl("GetAppointments.php"),
            {
                action: "BarberFreeTime",
                BarberID: BarberID,
                Date: Date
            },
            BarberFreeTimeCallback
        );
    },

    ListBarbers: function (BarberListCallback) {
        $.post(
            ParseUrl("GetAppointments.php"),
            {
                action: "ListBarbers"
            },
            BarberListCallback
        );

    },
    SetAppointment: function (BarberID, Barbershop, date, time, SetAppointmentCallback) {
        $.post(
            ParseUrl("BookAppointment.php"),
            {
                barbershop: Barbershop,
                barber: BarberID,
                date: date,
                time: time
            },
            SetAppointmentCallback
        )
    },

    CancelAppointment: function (AppointmentID, CancelAppointmentCallback) {
        $.post(
            ParseUrl("GetAppointments.php"),
            {
                AppointmentID: AppointmentID
            },
            CancelAppointmentCallback
        )

    }

};






