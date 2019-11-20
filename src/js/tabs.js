(function($) {
    $.fn.extend({
        tabs: function(options) {
            let defaults = {
                event: 'click',
                btn: 'actived',
                content: 'show'
            };

            $.extend(defaults, options); //合并对象
            // console.log(this); // 通过当前jQuery对象进行元素查找
            let oBtn = this.children('ul').children('li');
            let oDiv = this.children('div');
            oBtn.on(defaults.event, function() {
                let index = oBtn.index(this);
                $(this).addClass(defaults.btn).siblings().removeClass(defaults.btn);
                oDiv.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
            });
        }
    });
})(jQuery);