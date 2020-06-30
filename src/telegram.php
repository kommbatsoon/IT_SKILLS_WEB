<?php

$url = $_POST['url'];
$date = $_POST['date'];
$time = $_POST['time'];
$course = $_POST['courseName'];
$phone = $_POST['phone'];

$token = "1231571642:AAFBCkx5-0MHwDf-ZPYPd2AhaM3hp70wzVs";
$chat_id = "-458680749";

$arr = array(
  'Новая заявка',
  'Дата: ' => $date,
  'Время: ' => $time,
  'Курс: ' => $course,
  'Номер телефона:' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>