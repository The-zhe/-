require.config({
    paths: {
        jquery: "./jquery.min",
        index: "./lib/dm_home",
    },
    shim: {}
});

require(['jquery', 'index'], function($, index) {
    index.get();
});