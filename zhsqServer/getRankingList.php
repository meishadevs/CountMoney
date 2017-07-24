<?php

//连接数据库
require_once('connect.php');

//允许跨域
header("Access-Control-Allow-Origin:*");

//执行SQL语句，从数据库中获取信息
$query = mysql_query("select * from gameinfo order by nummoney desc limit 0, 10
");

while ($row = mysql_fetch_array($query)) {

	//创建数组
	$sayList[] = array(

		'cardNum' => $row['cardnum'],

		'numMoney' => $row['nummoney']
      );
}

echo json_encode($sayList);

?>

