$(function(){
    var menu = $('.menu')
    $('#menu-btn').click(function () { 
        if(menu.hasClass('show')){
            menu.removeClass('show')
        }else{
            menu.addClass('show')
        }
    });
})