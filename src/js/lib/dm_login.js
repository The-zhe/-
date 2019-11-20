let baseUrl = 'http://localhost:8080/damai';

define(['jquery'], function($) {

    return {
        get: function(selector) {
            $(selector).on('click', function() {
                $.ajax({
                    type: 'get',
                    url: baseUrl + '/lib/check.php',
                    data: {
                        phone: $('#reg_mobile').val(),
                        password: $('#reg_password').val()
                    },
                    dataType: "json",
                    success: function(response) {
                        if (response.msg == 1) {
                            alert('登录成功');
                            location.href = "http://localhost:8080/damai/src/html/home.html"
                        } else {
                            alert('用户名或密码错误');
                        }
                    },
                    error: function(xhr, err) {
                        return err;
                    }
                })
            })
        }
    }
})