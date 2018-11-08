/**
 *
 * @param email of customer
 * @param passwd of customer
 * @param callback a function that takes a response whick will be json to indicate return of Panel call
 */
function BarberLogin(email,passwd,callback){
     $.post(
            ParseUrl("LogIn.php"),
            {
                email: email,
                passwd: passwd,
                type:"Barber"
            },
            callback
     )
}

function BarberRegister(email,passwd,fname,lname,callback){
    $.post(
        ParseUrl("CreateAccount.php"),
        {
            email:email,
            passwd:passwd,
            type:"Barber",
            fname:fname,
            lname:lname

        },
        callback
    );
}