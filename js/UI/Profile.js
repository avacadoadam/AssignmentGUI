/***
 * Sets up a profile Panel on both Barbers ,Admins and customers
 *
 * Must use id with the Namespace being "Profile " Then followed by the variable name
 * The following variable must be capital
 * example id="ProfileName"
 */

ProfileDisplay = ()=>{
    $('#ProfileName').text(localStorage.getItem('fname') + " " + localStorage.getItem('lname'));
    $('#ProfileEmail').text(localStorage.getItem('email'));
    $('#ProfileRating').text(localStorage.getItem('rating'));
    $('#ProfileType').text(localStorage.getItem('type'));
};


