$(function(){
    var res = $('.res')

    $('#baixo').hover(function(){
        res.text('Isso é um baixo')
    }).mouseleave(function(){
        res.text('')
    })
})