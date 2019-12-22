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


///////////////////////////////////////////////////////////////////////////////////////////////////Scrolling
lastScroll = 0;
$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if(lastScroll - scroll > 0) {
        $(".footer-block").addClass("scrollbottom");
    } else {
        $(".footer-block").removeClass("scrollbottom");
    }
    lastScroll = scroll;
});

/////////////////////////////////////////////////////////////////////////Rendering
function RenderMessage(relative, message){
    let renderSkeleton = `
    <div class="message">
        <div class="drawing-avatar"></div>
        <p>Sebastian: ${message}</p>
    </div>`
    relative.append(renderSkeleton);
}
$('.draw-input img').click(()=>{
    RenderMessage($('.messages'), $('.draw-input input').val());
})

////////////////////////////////////////////////////////////////////////////Sorting
document.addEventListener('DOMContentLoaded', () => {
    let elements = []
    let container = document.querySelector('#leaderboard')
    container.querySelectorAll('.row').forEach(el => elements.push(el))
    container.innerHTML = ''
    elements.sort((a, b) => b.querySelector('.score').textContent - a.querySelector('.score').textContent)
    elements.forEach(e => container.appendChild(e))
  })

