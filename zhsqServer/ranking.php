<?php

//连接数据库
require_once('connect.php');

//允许跨域
header("Access-Control-Allow-Origin:*");

//获得信用卡账号
$cardNum = $_POST['cardNum'];

//获得数钱的张数
$numMoney = $_POST['numMoney'];

//获得日期
$year = date('Y');
$month = date('m');
$day = date('d');

//将数据插入到数据库中
$sql = "insert into gameinfo(cardnum, nummoney, year, month, day) values ('".$cardNum."',".$numMoney.",".$year.",".$month.",".$day.")";

$query = mysql_query($sql);

if ($query) {
	//echo "数据已经成功的插入到了数据库中<br>";
} else {
	echo "数据插入失败<br>";
	return;
}

//执行SQL语句，从数据库中获取信息
$query = mysql_query("select * from gameinfo order by nummoney desc
");

//遍历从数据库中获取到的商品信息
while ($row = mysql_fetch_array($query)) {

	//创建数组，储存从数据库中获取到的信息
	$array[] = array(

		//id
		'id' => $row['id'],

		//信用卡账号
		'cardNum' => $row['cardnum'],

		//商品价格
		'numMoney' => $row['nummoney']
      );
}

//玩家在数钱游戏中的排名
$ranking = -1;

for ($i = 0; $i < count($array); $i++) { 

	if ($array[$i]['cardNum'] == $cardNum && $array[$i]['numMoney'] == $numMoney) {
		$ranking = $i + 1;
		break;
	}
}

//返回玩家本次数钱中的排名
echo $ranking;

?>

