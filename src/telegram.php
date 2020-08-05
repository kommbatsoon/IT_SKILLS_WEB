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
    'URL' => $url,
    'Дата' => $date,
    'Имя' => $name,
    'Email' => $email,
    'Телефон' => $phone,
    'Вопрос' => $question,
);

function test_empty($var)
  {
  return(!empty($var));
  }

$filtered_array = array_filter($arr,"test_empty");

foreach($filtered_array as $key => $value) {
  $txt .= "<b>".$key.":</b> <i>".$value."</i>%0A";
};

$prefix = '<b>Новая заявка!</b>%0A';
$form = $prefix . $txt;

fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$form}","r");

?>