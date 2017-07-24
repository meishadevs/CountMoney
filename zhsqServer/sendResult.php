<?php

//连接数据库
require_once('connect.php');

//允许跨域
header("Access-Control-Allow-Origin:*");

//获得信用卡账号
$cardNum = $_POST['cardnum'];

//获得在数钱游戏中数钱的张数
$numMoney = $_POST['nummoney'];

//获得用户在本次游戏中共获得多少钱
$money = $_POST['money'];

//创建SQL语句，用于将用户在本次游戏中共获得的金额数添加到数据库中
$sql = "update gameinfo set money = $money where cardnum = $cardNum and nummoney = $numMoney and money is null";

//执行SQL语句
$query = mysql_query($sql);

if (!$query) {
	echo "执行失败";
}

//执行SQL语句，从数据库中获得用户在本次游戏中的数据
$query = mysql_query("select * from gameinfo where cardnum = $cardNum and nummoney = $numMoney and money = $money");

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

