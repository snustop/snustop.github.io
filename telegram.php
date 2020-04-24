<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$phone = $_POST['Телефон'];
$mess = $_POST['Сообщение'];
$social = $_POST['Соцсети'];
$cart_code = $_POST['some_code'];
$cart_fileds = $_POST['some_param'];
$order_list = (array) json_decode(stripslashes($_POST['order_list']));  //(array) json_decode(stripslashes($_POST["cnt_rest"]));

// функция которая убирает лишние символы и +38, чтоб привести номер в единый формат
function unify_phone_numbers($phones) {
    // Replace unwanted symbols.
    $pattern = [
        '/[\s\(\)+-]+/',
        '/^38/',
    ];
    $replacement = '';
    $phones = preg_replace($pattern, $replacement, $phones);

    // Append zero at start.
    $phones = array_map(function ($value) {
        return $value[0] != '0' ? '0' . $value : $value;
    }, $phones);

    return $phones;
}

$phones_orig = [
    $phone
];

$phone_format = unify_phone_numbers($phones_orig);
$viber = '<a href="viber://chat?number=%2B38' . $phone_format[0] . '">' . $phone .'</a>, 38'. $phone_format[0];

$token = "554609758:AAEomr1gL9A_rD6ivlvQ3y4-FsL-6Fa4Lt8";
$chat_id = "-256547191";
$arr = array(
	'Телега или инст: ' => $social,
	'Вайбер: ' => $viber,
  'Телефон: ' => $phone,
  'Cообщение: ' => $mess,
  'Промо код: ' => $cart_code,
  'Итого: ' => $cart_fileds
);



foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b>".$value."%0A";
};

$order_message = "";
for($i = 0; $i < count($order_list); $i++) {
	$total_price_item = $order_list[$i]->price * $order_list[$i]->quantity;
	$order_message = $order_message."<b>".$order_list[$i]->id." Название "."</b>".$order_list[$i]->name."%0A";
	$order_message = $order_message."<b>".$order_list[$i]->id." Количество "."</b>".$order_list[$i]->quantity."%0A";
	$order_message = $order_message."<b>".$order_list[$i]->id." Цена за еденицу "."</b>".$order_list[$i]->price."%0A";
	$order_message = $order_message."<b>".$order_list[$i]->id." Общая стоимость "."</b>".$total_price_item."%0A";
	$order_message = $order_message."%0A";
}


$txt = $order_message.$txt;

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$txt = str_replace("%0A","<br/>",$txt);
$to = "snustop.com.ua@gmail.com";
$subject = "Order";
$message = "$txt";
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: snustop.com.ua\r\n";

mail($to, $subject, $message, $headers);
echo $sendToTelegram;
?>