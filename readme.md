<h1 align="center">Welcome to Form validation Project! 👋</h1>

# Form validation

You have definitely registered on different sites. To create a registration form, you need a series of skills that we have in this project, a validation form to register and enter your site.
Next, we will review the project.

## Skills

To do this project, we use the Bootstrap framework and for the validation part, we use JavaScript to send the information correctly.

## Usage

First, we create a function and write the following command to read information from the inputs
```Javascript
var name = document.getElementById("name").value;
var user = document.getElementById("user").value;
var pass = document.getElementById("pass").value;
var confirmpass = document.getElementById("conpass").value;
var mobileNumber = document.getElementById("mobileNumber").value;
var emails = document.getElementById("emails").value;
```

The following code is to clear the error code so that it is not displayed after every error

```Javascript
document.getElementById("Name").innerHTML= '' ;
document.getElementById("emailids").innerHTML= '' ;  
document.getElementById("username").innerHTML= '' ;
document.getElementById("passwords").innerHTML= '' ;
document.getElementById("confirmpass").innerHTML= '' ;
```
Using the following conditional commands, we write a conditional command for each variable, which displays an error if it is empty or has a problem.

```Javascript
if (name == "") {
    document.getElementById("Name").innerHTML="**  Please enter your name  **";
    return false;
}
```

For email input, we use the following conditional command, if there is no @ in the email, it will show an error as shown below.
 
```Javascript
if (emails.charAt(emails.length - 4) !="." &&
    emails.charAt(emails.length - 3) !=".") {
    document.getElementById("emailids").innerHTML= "** Enter your email correctly**";
  } 

```

You can use this project in your main and portal projects and improve the efficiency of your site and connect this part to the backend and store the information in the database that we will explain in the next repositories.

## Result

This project was written by Majid Tajanjari and the Aiolearn team, and we need your support!❤️


# فرم اعتبارسنجی

قطعا در سایت های مختلف ثبت نام کرده اید. برای ایجاد فرم ثبت نام نیاز به یک سری مهارت هایی دارید که ما در این پروژه داریم، یک فرم اعتبار سنجی برای ثبت نام و ورود به سایت شما.
در ادامه به بررسی پروژه می پردازیم.

## مهارت ها

برای انجام این پروژه از فریم ورک بوت استرپ و برای قسمت اعتبار سنجی از جاوا اسکریپت برای ارسال صحیح اطلاعات استفاده می کنیم.

## Usage

ابتدا یک تابع ایجاد می کنیم و دستور زیر را برای خواندن اطلاعات از ورودی ها می نویسیم

```Javascript
var name = document.getElementById("name").value;
var user = document.getElementById("user").value;
var pass = document.getElementById("pass").value;
var confirmpass = document.getElementById("conpass").value;
var mobileNumber = document.getElementById("mobileNumber").value;
var emails = document.getElementById("emails").value;
```

کد زیر برای پاک کردن کد خطا است تا بعد از هر خطا نمایش داده نشود

```Javascript
document.getElementById("Name").innerHTML= '' ;
document.getElementById("emailids").innerHTML= '' ;  
document.getElementById("username").innerHTML= '' ;
document.getElementById("passwords").innerHTML= '' ;
document.getElementById("confirmpass").innerHTML= '' ;
```
با استفاده از دستورات شرطی زیر برای هر متغیر یک دستور شرطی می نویسیم که در صورت خالی بودن یا مشکل داشتن خطا را نمایش می دهد.

```Javascript
if (name == "") {
    document.getElementById("Name").innerHTML="**  لطفا نام خود را وارد کنید **";
    return false;
}
```

برای ورودی ایمیل از دستور شرطی زیر استفاده می کنیم، اگر @ در ایمیل وجود نداشته باشد مطابق شکل زیر خطا نشان می دهد.
 
```Javascript
if (emails.charAt(emails.length - 4) !="." &&
    emails.charAt(emails.length - 3) !=".") {
    document.getElementById("emailids").innerHTML= "** ایمیل خود را به درستی وارد کنید  **";
  } 

```

شما می توانید از این پروژه در پروژه های اصلی و پرتال خود استفاده کنید و کارایی سایت خود را ارتقا دهید و این قسمت را به بک اند متصل کنید و اطلاعات را در دیتابیس ذخیره کنید که در مخازن بعدی توضیح خواهیم داد.

## نتیجه

این پروژه توسط مجید تجن جاری و تیم Aiolearn نوشته شده است و ما به حمایت شما نیازمندیم!❤️
