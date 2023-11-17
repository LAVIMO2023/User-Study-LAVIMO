<?php
$q = $_GET["q"];
$dir = "CVPR2024/userstudy_outcome/";
$file = $dir."result-".date("d-h:i:sa").".txt";
chmod($dir, 0777);
$text_file = fopen($file, "w");
echo fwrite($text_file, $q);
fclose($text_file);
?>
