$(document).ready(function() {
    checkPages();

	$('.site-page').find('a').on('click', function(event){
        event.stopPropagation();
    });

	$('.site-menu').on('click', function(event){
        $('.site-overlay').addClass('is-visible');
        $('body').addClass('nav-open');
    });

    $('.site-overlay').on('click', function(event){
        $('.site-overlay').removeClass('is-visible');
        $('body').removeClass('nav-open');
    });
});

function checkPages(){
    $('.site-page').off('swiperight').off('swipeleft');

    $('.page-1:not(.swiped-left):not(.swiped-right)').on('swiperight', function(){
        if($('.swiped-right').length > 0) $('.swiped-right').removeClass('swiped-right').removeClass('page-1').addClass('page-4');
        if($('.swiped-left').length > 0) $('.swiped-left').removeClass('swiped-left').removeClass('page-1').addClass('page-4');

        $(this).addClass('swiped-right');

        $('.page-2').removeClass('page-2').addClass('page-1');
        $('.page-3').removeClass('page-3').addClass('page-2');
		$('.page-4').removeClass('page-4').addClass('page-3');

        checkPages();
    })

    $('.page-1.swiped-left').on('swiperight', function(){
        $('.page-3').removeClass('page-3').addClass('page-4');
		$('.page-2').removeClass('page-2').addClass('page-3');
        $('.page-1:not(.swiped-left)').removeClass('page-1').addClass('page-2');

        $(this).removeClass('swiped-left');

        checkPages();
    })

    $('.page-1:not(.swiped-left):not(.swiped-right)').on('swipeleft', function(){
        if($('.swiped-left').length > 0) $('.swiped-left').removeClass('swiped-left').removeClass('page-1').addClass('page-4');
        if($('.swiped-right').length > 0) $('.swiped-right').removeClass('swiped-right').removeClass('page-1').addClass('page-4');

        $(this).addClass('swiped-left');

        $('.page-2').removeClass('page-2').addClass('page-1');
        $('.page-3').removeClass('page-3').addClass('page-2');
		$('.page-4').removeClass('page-4').addClass('page-3');

        checkPages();
    })

    $('.page-1.swiped-right').on('swipeleft', function(){
		$('.page-3').removeClass('page-3').addClass('page-4');
		$('.page-2').removeClass('page-2').addClass('page-3');
        $('.page-1:not(.swiped-right)').removeClass('page-1').addClass('page-2');

        $(this).removeClass('swiped-right');

        checkPages();
    })
}
