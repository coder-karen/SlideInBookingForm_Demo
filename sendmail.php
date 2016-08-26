<?php 

  if(isset($_POST['submit'])) {

  
    $from = trim(filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL));
    $name = trim(filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING));
    $datefrom = preg_replace("([^0-9/])", "", $_POST['from']);
    $dateto = preg_replace("([^0-9/])", "", $_POST['to']);
    $message = trim(filter_input(INPUT_POST, "comments", FILTER_SANITIZE_SPECIAL_CHARS));

    if ($name == "" || $from == "" || $datefrom == "" || $dateto == "") {
      
      echo "<head>
      <link rel='stylesheet' href='style.css' type='text/css' >
      </head>
      <body>
      <div id='container'>
      <h1 style='color: rgb(180,0,0);'>There was an error with your form submission.</h1>
      <p style='color: rgb(180,0,0);'>Please fill in the required fields: <strong>name, email and dates from and to</strong>. Return to the main page <strong><a href='index.html'>here.</a></strong>
      </p>
      </div>
      </body>";

      exit;
    }
   


    $email_from = 'k_attfield@yahoo.com';
    $email_subject = "New Form submission";
    $email_body = "You have received a new message from your booking form. \n\n From: $name\n Email: $from\n".
    "\n The booking dates requested are from: $datefrom to $dateto" .
                            "\n\nThe following message was included:\n $message.";
    $to = "k_attfield@yahoo.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $from \r\n";
 
    mail($to,$email_subject,$email_body,$headers);

  }
 

?>

<!-- Message to be displayed after successful form submission -->

  <style>
  <?php include 'style.css'; ?>
  </style>

  <body>
    <div id="container">
      <h1>Thank you for your form submission.</h1>
      <p>Return to the main page <strong><a href="index.html">here.</a></strong>
      </p>
    </div>
  </body>
   

<?php 

?>

 
