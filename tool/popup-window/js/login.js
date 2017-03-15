
$(document).ready(function(){
    $(".popup").click(function(){
        $("body").css('background',"rgba(0,0,0,0.35)");
    });

    $(".close-login").click(function(){
        $("body").css('background',"rgba(0,0,0,0)");
    });

});

$(function () {
    H_login = {};
    H_login.openLogin = function(){
        $('.login-header a').click(function(){
            $('.login').show();
            $('.login-bg').show();
        });
    };
    H_login.closeLogin = function(){
        $('.close-login').click(function(){
            $('.login').hide();
            $('.login-bg').hide();
        });
    };
    H_login.run = function () {
        this.closeLogin();
        this.openLogin();
        this.loginForm();
    };
    H_login.run();
});

