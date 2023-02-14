
$(document).ready(function () {
    $(".book-wrap").click(function () {
        $(this).children('.side').find('.side-fill').addClass('side-fill2');
        $(this).siblings().children('.side').find('.side-fill').delay(4000).removeClass('side-fill2');//사이드 닫히는 구간1
        $(this).animate({width: "280px"}); //메인화면이 열리는 구간
        $(this).children(".main").find(".main-fill").addClass('main-fill2');//메인애니메이션 작동
        $(this).siblings().children('.main').find('.main-fill').delay(4000).removeClass('main-fill2');//메인 닫히는 구간1
        
        $(this).siblings().animate({width: "50px"},1000);
        // $(this).delay(1000).animate({width: "100px"});
    });
});