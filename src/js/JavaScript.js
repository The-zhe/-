// user
var user_Boolean = false;
var password_Boolean = false;
var varconfirm_Boolean = false;
var emaile_Boolean = false;
var Mobile_Boolean = false;
var Validation_Boolean = false;

// $('.reg_user').blur(function() {
//     if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user").val())) {
//         $('.user_hint').html("✔").css("color", "green");
//         user_Boolean = true;
//     } else {
//         $('.user_hint').html("×").css("color", "red");
//         user_Boolean = false;
//     }
// });

// password
$('.reg_password').blur(function() {
    if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())) {
        $('.password_hint').html("✔").css("color", "green");
        password_Boolean = true;
    } else {
        $('.password_hint').html("×").css("color", "red");
        password_Boolean = false;
    }
});


// password_confirm
$('.reg_confirm').blur(function() {
    if (($(".reg_password").val()) == ($(".reg_confirm").val())) {
        $('.confirm_hint').html("✔").css("color", "green");
        varconfirm_Boolean = true;
    } else {
        $('.confirm_hint').html("×").css("color", "red");
        varconfirm_Boolean = false;
    }
});


// // Email
// $('.reg_email').blur(function() {
//     if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".reg_email").val())) {
//         $('.email_hint').html("✔").css("color", "green");
//         emaile_Boolean = true;
//     } else {
//         $('.email_hint').html("×").css("color", "red");
//         emaile_Boolean = false;
//     }
// });


// Mobile
$('.reg_mobile').blur(function() {
    if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())) {
        $('.mobile_hint').html("✔").css("color", "green");
        Mobile_Boolean = true;
    } else {
        $('.mobile_hint').html("×").css("color", "red");
        Mobile_Boolean = false;
    }
});

//验证
$(".inner").mousedown(function(e) {
    var el = $(".inner"),
        os = el.offset(),
        dx, $span = $(".outer>span"),
        $filter = $(".filter-box"),
        _differ = $(".outer").width() - el.width();
    $(document).mousemove(function(e) {
        dx = e.pageX - os.left;
        if (dx < 0) {
            dx = 0;
        } else if (dx > _differ) {
            dx = _differ;
        }
        $filter.css('width', dx);
        el.css("left", dx);
    });
    $(document).mouseup(function(e) {
        $(document).off('mousemove');
        $(document).off('mouseup');
        dx = e.pageX - os.left;
        if (dx < _differ) {
            dx = 0;
        } else if (dx >= _differ) {
            dx = _differ;
            $(".outer").addClass("act");
            el.html('&radic;');
            Validation_Boolean = true;
        }
        $filter.css('width', dx);
        el.css("left", dx);
    })
})

// click
$('.red_button').click(function() {
    if (password_Boolean && varconfirm_Boolean && Mobile_Boolean && Validation_Boolean == true) {
        // alert("注册成功");
        //console.log(password_Boolean, varconfirm_Boolean, Mobile_Boolean, Validation_Boolean);
    } else {
        //console.log(password_Boolean, varconfirm_Boolean, Mobile_Boolean, Validation_Boolean);
        alert("请完善信息");
    }
});