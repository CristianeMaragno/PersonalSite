<?php
	$name=$_POST['Name']; 
	$email=$_POST['Email'];
	$subject=$_POST['Subject'];
	$message=$_POST['Message'];


	$body = "[CONTACT FORM SITE] Name: " . $name . " Message: " . $message;
	$from="From: $name<$email>\r\nReturn-path: $email";
	$receiver = "contato@cristianemaragno.com";


	if (mail($receiver, $subject, $body, $from))
	{
		header("Location: http://www.cristianemaragno.com?status=success");
	}else{
		header("Location: http://www.cristianemaragno.com?status=error");
	}

?>