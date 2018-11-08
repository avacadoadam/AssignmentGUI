/**
 * A class for validation
 *
 * @type {{CheckDate: validation.CheckDate, CheckHour: validation.CheckHour}}
 */
var validation = {

    CheckDate: function (date) {
        y = date.value.split("-")[0];
        m = date.value.split("-")[1];
        d = date.value.split("-")[2];
        date = new Date(Date.now());
        if (y < date.getFullYear()) {
            return false;
        }
        if (y === date.getFullYear()) {
            if (m < date.getMonth() + 1) {
                return false;
            }
            if (m === date.getMonth() + 1) {
                if (d < date.getDate()) {
                    return false;
                }
            }
        }
        return true;

    },
    CheckHour: function (hour) {
        hour = parseInt(hour);
        if (hour > 7 && hour < 18) {
            return true;
        }else{
            return false;
        }
    }
};

