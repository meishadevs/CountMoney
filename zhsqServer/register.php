<?php

//连接数据库
require_once('connect.php');

//允许跨域
header("Access-Control-Allow-Origin:*");
//header("Access-Control-Allow-Credentials", "true");
//header("Access-Control-Allow-Methods", "*");
//header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
//header("Access-Control-Expose-Headers", "*");


//获得信用卡账号
$cardNum = $_POST['cardnum'];

//创建一条查询信用卡账号是否存在的SQL语句
$sql = "select * from account where cardnum = '".$cardNum."'";

//查询信用卡账号是否存在
$query = mysql_query($sql);

$row = mysql_num_rows($query);

//如果信用卡账号已存在
if ($row > 0) {
	echo "0";
	return;
}

//创建一条将信用卡账号插入到数据库中的语句
$sql = "insert into account(cardnum) values ('".$cardNum."')";

//将信用卡账号插入到数据库中
$query = mysql_query($sql);

//判断是否注册成功
if ($query) {

	//注册成功
	echo "1";
} else {

	//注册失败
	echo "-1";
}

?>

