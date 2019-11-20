<?php

    include('./conn.php'); 


    $telphone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];


    
        $sql = "select * from dm_load where user_mobile = '$telphone'";
        $result = $mysqli->query($sql);
        if ($result->num_rows>0) {
            // echo '{"msg":"0"}';
            echo '{"msg":"用户名已存在","has":true,"status":200}';
        } else{
            $sql_insert = "insert into dm_load(`user_mobile`,`user_password`) values($telphone,'$password')";
            $res_insert = $mysqli->query($sql_insert);
            if ($res_insert) {
                echo '{"msg":"1"}';
            } else {
                echo "<script>alert('系统繁忙，请稍候！');</script>";
            }
        }

$mysqli->close();
?>