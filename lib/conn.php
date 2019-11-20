<?php
    header('content-type:text/html;charset=utf-8');

    $mysql_conf = array(
        'host' => 'localhost:3306',
        'db_user' => 'root',
        'db_pass' => '123456',
        'db' =>'damai',
    );

    // $mysqli = @new mysql($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);
     $mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);
    // //var_dump($mysqli);

    if($mysqli->connect_errno){
        die('连接错误'.$mysqli->connect_errno);
    }

    $mysqli->query("set names utf8");

    $select_db = $mysqli->select_db($mysql_conf['db']);

    if(!$select_db){
        die('数据库选择错误'.$mysqli->error);
    }




    // if ($conn->connect_error){
    //     echo '数据库连接失败！';
    //     exit(0);
    // }else{
    //     if ($username == ''){
    //         echo '<script>alert("请输入用户名！");history.go(-1);</script>';
    //         exit(0);
    //     }
    //     if ($password == ''){
    //         echo '<script>alert("请输入密码！");history.go(-1);</script>';
    //         exit(0);
    //     }
    //     $sql = "select username,password from userinfo where username = '$_POST[username]' and password = '$_POST[password]'";
    //     $result = $conn->query($sql);
    //     $number = mysqli_num_rows($result);
    //     if ($number) {
    //         echo '<script>window.location="index.html";</script>';
    //     } else {
    //         echo '<script>alert("用户名或密码错误！");history.go(-1);</script>';
    //     }
    // }

?>