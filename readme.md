

An example landing page with slide-in booking form and datepicker calender (including option to pre-set dates to be booked or unavailable), using jQuery and PHP.

# How to use

On this basic demonstration HTML page you can click on the 'book here' slider button to the left of the page and the booking form slides out. Fill out the required fields. Note: if you select a date range that includes unavailable dates an alert box will let you know that you need to re-select your dates. After filling out all the required fields, once you click submit you will be directed to a thank-you page. An email will be sent to the owner of the booking form page with all form details.

To set pre-booked dates, add the dates you wish to disable to var disableddates in app.js. 

To set the from and to email addresses, modify $email_from and $to in sendmail.php. Make sure your server's/localhost's settings enable you to send mail from the address you've given.

# Screenshots

![Screenshot slider open]( https://github.com/coder-karen/SlideInBookingForm_Demo/blob/master/images/ScreenshotForm.PNG)

![Screenshot with calender open]( https://github.com/coder-karen/SlideInBookingForm_Demo/blob/master/images/ScreenshotFormCalender.PNG)
