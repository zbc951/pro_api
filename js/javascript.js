//leftlist_slide
$(function(){
    $('.ul4 a').click(function(){
        $('.ul4').toggleClass('slide')
        $('.ul4_1,.ul4_2').removeClass('slide')
    })
    $('.ul4_1 li:first-child').click(function(){
        $('.ul4_1').toggleClass('slide')
    })
    $('.ul4_1 li:first-child').hover(function(){
        $('.ul4_1 .leftic').toggleClass('white')
    })
    $('.ul4_2 li:first-child').click(function(){
        $('.ul4_2').toggleClass('slide')
    })
    $('.ul4_2 li:first-child').hover(function(){
        $('.ul4_2 .leftic').toggleClass('white')
    })
})

//leftlist_slide_rwd
$(function(){
    $('.rwdtop button').click(function(){
        $('aside').toggleClass('slide')
        $('main').toggleClass('slide_r')
    })
    $('article').click(function(){
        $('aside').removeClass('slide')
        $('main').removeClass('slide_r')
    })
})