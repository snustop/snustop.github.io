<?php 

$Name = $_POST['Name'];
$Comment = $_POST['Comment'];
$File_name = $_POST['File_name'];
$Rating_Val = $_POST['Rating_Val'];
$date_comment = date("m.d.y");

#Get old comments
$old = fopen($File_name, "r+t");

$file_size;
define('FILENAME', $File_name);
if (!file_get_contents(FILENAME))
  $file_size = 2024;
else {
  $file_size = 5555;
}

# выводит количество звезд в зависимости от от оценки START
$count_stars;
if ($Rating_Val == 5) {
	$count_stars = "<li class='yes' data-rating='5'>&#9733;</li><li class='yes'>&#9733;</li><li class='yes'>&#9733;</li><li class='yes'>&#9733;</li><li class='yes'>&#9733;</li>";
} elseif ($Rating_Val == 4) {
	$count_stars = "<li class='yes' data-rating='4'>&#9733;</li><li class='yes'>&#9733;</li><li class='yes'>&#9733;</li><li class='yes'>&#9733;</li><li>&#9733;</li>";
} elseif ($Rating_Val == 3) {
	$count_stars = "<li class='yes' data-rating='3'>&#9733;</li><li class='yes'>&#9733;</li><li class='yes'>&#9733;</li><li>&#9733;</li><li>&#9733;</li>";
} elseif ($Rating_Val == 2) {
	$count_stars = "<li class='yes' data-rating='2'>&#9733;</li><li class='yes'>&#9733;</li><li>&#9733;</li><li>&#9733;</li><li>&#9733;</li>";
} elseif ($Rating_Val == 1) {
	$count_stars = "<li class='yes' data-rating='1'>&#9733;</li><li>&#9733;</li><li>&#9733;</li><li>&#9733;</li><li>&#9733;</li>";
} else {
	$count_stars = "<li class='yes' data-rating='5'>&#9733;</li><li class='yes'>&#9733;</li><li class='yes'>&#9733;</li><li class='yes'>&#9733;</li><li class='yes'>&#9733;</li>";
}
# выводит количество звезд в зависимости от от оценки END

$old_comments = fread($old, $file_size);

#Delete everything, write down new and old comments
$write = fopen($File_name, "w+");
$comment_br = str_replace(array("\r", "\n"), '<br>', $Comment);
$new_comments = "<article class='item-review'><div class='d-flex justify-content-between'><span class='mb-0'>".strip_tags($Name)."</span><span><time>".$date_comment."</time></span></div><p class='mb-0'>".strip_tags($comment_br, '<br>')."</p><ul class='comment-rating d-flex'>".$count_stars."</ul><hr></article>\n";
$string = $old_comments.$new_comments;
fwrite($write, $string);
fclose($write);
fclose($old);

$file_array =  file($File_name);
$num_str =  $file_array;
$count_str =  count($file_array);
for ($i = 0; $i <= count($num_str) && $i < 15; $i++) 
{ 
  echo $num_str[$i]; 
}

# записываем все в общий файл для отслеживания комментариев
# записываем количество и страницу где оставили коммент НЕ РАБОТАЕТ, НУЖНО СДЕЛАТЬ
$write_all = fopen("comments/all-comment.html", "a");
fwrite($write_all, $File_name.$new_comments);
fclose($write_all);

?>