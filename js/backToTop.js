/**
 * Created with JetBrains WebStorm.
 * User: Luo Bo
 * Date: 14-8-25
 * Time: 下午10:00
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() >= 100){
            $('.actGotop').fadeIn(300);
        }else{
            $('.actGotop').fadeOut(300);
        }
    });
    $('.actGotop').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);});
});
