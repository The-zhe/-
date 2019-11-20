<?php

    include('./conn.php');

    $telphone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];


    $sql = "select * from dm_load where user_mobile = '$telphone' and user_password='$password'";
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        // echo "<script src='../src/js/cookie.js'></script>";
        // echo "<script>cookie.set('isLogin','true',1);cookie.set('phone','$telphone',1);</script>";
        echo '{"msg":"1"}';
    }else{
        //echo "<script>alert('系统繁忙，请稍候！');</script>";
        echo '{"msg":"0"}';
    }
?> 
