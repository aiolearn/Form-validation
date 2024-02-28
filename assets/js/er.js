function validation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    document.getElementById("username").innerHTML ='';
    document.getElementById("password").innerHTML='';

    if (user == "") {
        document.getElementById("username").innerHTML = "** لطفا نام کاربری خود را وارد کنید**"
        return false;
    }

    if (user.lengh <=5 || user.lengh >20) {
        document.getElementById("username").innerHTML = "** نام کاربری حداقل 5وحداکثر باید 20 حرف باشد**"
        return false;
    }

    if (!isNaN(user)) {
        document.getElementById("username").innerHTML = "**only characters are allowed**"
    }

    if (pass == "") {
        document.getElementById("password").innerHTML = "** لطفا پسورد خود را وارد کنید**"
        return false;
    }

    if (pass.length <=5 || pass.length > 20 ) {
        document.getElementById ("password").innerHTML = "** پسورد باید حداقل بیشتر از 5 حرف و حداکثر 20 حرف باشد**"
        return false;
    }
}