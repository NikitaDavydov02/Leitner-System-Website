<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet='UTF-8';
	$mail->setLanguage('ru','phpmailer/language/');
	$mail->IsHTML(true);
	$mail->setFrom('info@fls.guru','A');
	$mail->addAddress('nikita.davidov02@yandex.ru');
	$mail->Subject('Form website');
	$body='Hi!';
	if(trim(!empty($_POST['formMessage']))){
		$body.='<p><strong>Message:</strong> '.$_POST['formMessage'].'</p>';
	}
	$mail->Body=$body;
	if(!$mail->send()){
		$message='Error';
	}
	else{
		$message='Suscess';
	}
	$response=['message'=>$message];
	header('Content-type: application/json');
	echo json_encode($response);
?>