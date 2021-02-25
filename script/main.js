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


/* slider */
$(function(){
    var top = 0; // slider 위치
    var duration = 3000; // 인터벌 시간
        
    setInterval(function(){
       // 마지막 이미지 위치 확인
       if(top <= -900) {
           top = 0; // 처음 이미지 위치
       }
       $('.sliders').animate({
          marginTop: top + 'px' 
       });        
        top = top - 300;
    }, duration);
    
});