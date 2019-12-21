$('body').mousemove((event)=>{
    $(".guide-image").css({
     //'background-position': ''+event.pageX * 1/82+50+'%, '+event.pageY * 1/82+50+'%'
     'background-position': '' +event.pageX * 1/82+'%+50% , '+event.pageY * 1/82+'%+50%'
    })
  })

$.each($('.guide-title-info a'), function(){
    $(this).mouseover(()=>{
        $('.guide-image').css({
            'transform': 'scale(1.02)',
            'filter':  'blur(2px)'
        })
    })
    $(this).mouseout(()=>{
        $('.guide-image').css({
            'transform': 'scale(1)',
            'filter':  'blur(0px)'
        })
    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////Mobile Menu
$('.burger-btn').click(()=>{
    $('.burger-btn').toggleClass('mobile-toggle');
    $('nav').toggleClass('mobile-height');
})