require.config({
    paths: {
        jquery: "./jquery.min",
        reg: "./lib/dm_reg",
        // javascript: './JavaScript',
    },
    shim: {}
});

require(['jquery', 'reg'], function($, reg) {
    reg.get('.red_button')
});