function validation() {
  
  var name = document.getElementById("name").value;
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var confirmpass = document.getElementById("conpass").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var emails = document.getElementById("emails").value;

  document.getElementById("Name").innerHTML= '' ;
  document.getElementById("emailids").innerHTML= '' ;  
  document.getElementById("username").innerHTML= '' ;
  document.getElementById("passwords").innerHTML= '' ;
  document.getElementById("confirmpass").innerHTML= '' ;
  
  if (name == "") {
    document.getElementById("Name").innerHTML="**  لطفا نام خود را وارد کنید  **";
    return false;
  }

  if (emails == "") {
    document.getElementById("emailids").innerHTML = "**   لطفاایمیل  خود را وارد کنید  **";
    return false;
  }

  if (emails.indexOf("@")<=0) {
    document.getElementById("emailids").innerHTML = "**  لطفاایمیل  خود را به درستی وارد کنید  **";
    return false;
  }

  if (emails.charAt(emails.length - 4) !="." &&
    emails.charAt(emails.length - 3) !=".") {
    document.getElementById("emailids").innerHTML= "** ایمیل خودرا به درستی وارد کنید**";
    return false;
  } 

  if (user =="") {
    document.getElementById("username").innerHTML="** لطفا نام کاربری خود را وارد کنید**";
    return false;
  }

  if (user.length <= 3 || user.length >= 20) {
    document.getElementById("username").innerHTML = "** نام کاربری حداقل 5حرف و حداکثر 20حرف**";
    return false;
  }

  if (!isNaN(user)) {
    document.getElementById("username").innerHTML ="**با حروف و عدد وارد کنید"
    return false;
  }

  if (pass == "") {
    document.getElementById("passwords").innerHTML = "** پسورد خود را وارد کنید **";
    return false;
  }
  if (pass.length < 5 || pass.length >20) {
    document.getElementById("passwords").innerHTML = "** پسورد حداقل 5و حداکثر 20**";
    return false;
  }
  if (confirmpass == "") {
    document.getElementById("confirmpass").innerHTML = "**پسورد را مجددا وارد کنید**"
    return false;
  }
  if (pass !== confirmpass) {
    document.getElementById("confirmpass").innerHTML="**پسورد مشابه نیست**"
    return false;
  }

  if (mobileNumber == "") {
    document.getElementById("mobileno").innerHTML = "** لطفا شماره همراه خود را وارد کنید**"
    return false;
  }
    
  if (isNaN(mobileNumber)) {
    document.getElementById("mobileno").innerHTML = "** لطفا از صفحه کلید عدد استفاده کنید";
    return false;
  }

  if (mobileNumber.length !=11) {
    document.getElementById("mobileno").innerHTML = "** شماره موبایل باید 11عدد باشد**";
    return false;
  }

}