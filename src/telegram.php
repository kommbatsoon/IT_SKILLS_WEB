<?php

$token = "1231571642:AAFBCkx5-0MHwDf-ZPYPd2AhaM3hp70wzVs";
$chat_id = "-458680749";

$date = $_POST['date'];
$url = $_POST['url'];
$description = $_POST['description'];

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$question = $_POST['question'];

$arr = array(
  '*** Новая заявка ***',
  'Дата и время: ' => $date,
  'URL: ' => $url,
  'Описание: ' => $description,
  '--------------------',
  'Информация о клиенте',
  'Имя: ' => $name,
  'Email: ' => $email,
  'Телефор: ' => $phone,
  'Вопрос: ' => $question,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>