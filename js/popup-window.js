$(function () {
    H_login = {};
    H_login.openLogin = function(){
        $('.login-header a').click(function(){
            $('.login').show();

        });
    };

    H_login.closeLogin = function(){
        $('.close-login').click(function(){
            $('.login').hide();

        });
    };
    H_login.run = function () {
        this.closeLogin();
        this.openLogin();
        this.loginForm();
    };
    H_login.run();
});


