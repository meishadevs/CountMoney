<?php

//连接数据库
require_once('connect.php');

//允许跨域
header("Access-Control-Allow-Origin:*");

//获得信用卡账号
$cardNum = $_GET['cardnum'];

//执行SQL语句，从数据库中获得用户在本次游戏中的数据
$query = mysql_query("select * from gameinfo where cardnum = $cardNum");

while ($row = mysql_fetch_array($query)) {

	//创建数组
	$sayList[] = array(

		//id
		'id' => $row['id'],

		'cardNum' => $row['cardnum'],

		'numMoney' => $row['nummoney'],

		'money' => $row['money'],

		'year' => $row['year'],

		'month' => $row['month'],

		'day' => $row['day']
      );
}

echo json_encode($sayList);
?>

