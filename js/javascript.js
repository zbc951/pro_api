//leftlist_slide
$(function(){
    $('.list_ul4_li1').click(function(){
        $('.list_ul4').toggleClass('slide')
        $('.demo ul').removeClass('slide')
    })
    $('.coding_li1').click(function(){
        $('.coding ul').toggleClass('slide')
    })
    $('.demo_li1').click(function(){
        $('.demo ul').toggleClass('slide')
    })
})

//leftlist_slide_rwd
$(function(){
    $('.rwdtop button').click(function(){
        $('aside').toggleClass('slide')
        $('main').toggleClass('slide_r')
    })
})