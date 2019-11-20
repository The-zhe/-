let baseUrl = 'http://localhost:8080/damai';


define(['jquery'], function($) {
    return {
        get: function() {
            // $(selector).on('click', function() {
            console.log(1);
            $.ajax({
                type: 'get',
                url: baseUrl + '/lib/getall1.php',
                dataType: "json",
                // data: {
                //     phone: $('#reg_mobile').val(),
                //     password: $('#reg_password').val()
                // },
                success: function(response) {
                    // console.log(response);
                    var con = '';


                    // console.log(response.value);

                    response.forEach(value => {
                        var box = '';
                        console.log(value.pro_title.split(',')[3]);
                        var title = value.pro_title.split(',')[0].slice(7, -1);
                        var address = value.pro_title.split(',')[1].slice(9, -1);
                        var date = value.pro_title.split(',')[2].slice(6, -1);
                        var price = value.pro_title.split(',')[3].slice(7, -2);
                        var pic = value.pro_path;

                        con += `
                        <a href="#" class="box-right_item">
                        <div class="item_pic">
                            <img src="../img/${pic}" alt="">
                        </div>
                        <div class="item_text">
                            <div class="item_title">${title}</div>
                            <div class="item_place">${address}</div>
                            <div class="item_showtime">${date}</div>
                            <div class="item_price">${price}
                                <span>起</span>
                            </div>
                        </div>
                    </a>

                        `
                        box = `
                        <img src="../img/${pic}" alt="">
                        <div class="box-left">
                            <div class="title">${title} </div>
                            <div class="details">${price}<span>起</span></div>
                        </div>
                        `
                        $('.box-right').html(con);
                        $('.b_bpic').html(box);
                    });
                },
                error: function(xhr, err) {
                    return err;
                }
            });
            // })
        },

    }

});