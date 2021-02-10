/* main.js */

$(function(){
    /* 2depth메뉴 액션 */    
    $('#gnb > ul > li').hover(
        function() {
            // mouseover
            $('#gnb > ul > li')
                .find('.depth2')
                .addClass('show');
        },
        function() {
            // mouseout
            $("#gnb > ul > li")
                .find('.depth2').removeClass('show');
        }
    );
    
}); // end $