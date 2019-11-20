require.config({
    paths: {
        jquery: "./jquery.min",
        reg: "./lib/dm_login",
    },
    shim: {}
});

require(['jquery', 'reg'], function($, reg) {
    reg.get('.fm-button')
});