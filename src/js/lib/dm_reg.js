let baseUrl = 'http://localhost:8080/damai';


define(['jquery'], function($) {
    return {
        get: function(selector) {
            $(selector).on('click', function() {
                if (password_Boolean && varconfirm_Boolean && Mobile_Boolean && Validation_Boolean == true) {
                    $.ajax({
                        type: 'get',
                        url: baseUrl + '/lib/regist.php',
                        dataType: "json",
                        data: {
                            phone: $('#reg_mobile').val(),
                            password: $('#reg_password').val()
                        },
                        success: function(response) {
                            if (response.msg == 1) {
                                alert("注册成功");
                                // console.log(response.msg);
                                location.href = "http://localhost:8080/damai/src/html/login.html";
                                // console.log("success");
                            } else {
                                alert("用户名已存在");
                            }
                            //else if (typeof response == 'object') {
                            //     $('.slip').addClass('show').text('账号或者密码错误，请检查输入！');
                            //     phone = null;
                            //     pass = null;
                            // }
                        },
                        error: function(xhr, err) {
                            return err;
                        }
                    });
                }
            })
        },

    }

});