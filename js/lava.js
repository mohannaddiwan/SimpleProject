// $(window).on('load', function () {
//     $('.about').animate({
//         left: '40px'

//     }, 800);

// });





$(window).scroll(function () {
    $('.section').each(function () {
        if ($(window).scrollTop() > $(this).offset().top) {

            var x = $('.section');

            x.fadeIn(800);

        }
    })
});

var z = $('.about');
var x = $('.navbar-sticky');

$(window).scroll(function () {
    $('.navbar-sticky').each(function () {
        if ($(window).scrollTop() > z.offset().top ) {


            x.fadeIn(700).css('position', 'fixed');
           
        
        };
        if ($(window).scrollTop() < z.offset().top ) {
            x.fadeOut(100);
        }
});
});

/* scrolling */

$(window).scroll(function () {
    $('.scrolling').each(function () {
        if ($(window).scrollTop() > $(this).offset().top -100) {

            
            $('.menu-slide li a,.navbar li a,.navbar-sticky li a').removeClass('active');
            $('.menu-slide li a[data-value="' + $(this).attr('id') + '"],.navbar li a[data-value="' + $(this).attr('id') + '"],.navbar-sticky li a[data-value="' + $(this).attr('id') + '"]').addClass('active');

            if ($(window).scrollTop() > 1800) {
                console.log('heelo');

                $('.menu-slide li a,.navbar li a,.navbar-sticky li a').removeClass('active');
                // removeAllactive();
                if ($(window).scrollTop() > 2400) {
                    $('.menu-slide li a,.navbar li a ,.navbar-sticky li a').removeClass('active');
                    // removeAllactive();

                    $('.menu-slide li a[data-value="' + $(this).attr('id') + '"],.navbar li a[data-value="' + $(this).attr('id') + '"],.navbar-sticky li a[data-value="' + $(this).attr('id') + '"]').addClass('active');
                }

               


            }

        }
    });
});



// let removeAllactive = function(){
//     document.querySelectorAll('.navbar-sticky li a').forEach((el) => {
//         el.classList.remove('active');
//     });
// };









$('.menu-slide li a,.links li a , .navbar li a').on('click', function (e) {
    e.preventDefault();


    $('body ,html').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top - 10
    }, 1000);
});
/* scrolling */


/* menu slide*/
$('.fa-bars').on('click', function () {
    $(this).toggleClass('fa-times');
    $('.menu-slide').slideToggle(300);
});



$(' ul .sub-menu').on('mouseover',function(){

    $('.li-list').addClass('active');
    $('ul .sub-menu').css({
        opacity:'1',
        height: 'auto'
        
        

    });
  
});

$(' ul .sub-menu').on('mouseleave',function(){

    $('.li-list').removeClass('active');
    $('ul .sub-menu').css('opacity','0');
  
});




$('.ne-pr1').on('click',function(){
   
    $('.cv1').css({
        'transform':'translateX(-100%)',
        'zIndex':'1'
        
        
    });
    $('.cv2').css({
        'transform':'translateX(0)',
        'zIndex':'2'

    });

    
  
});
$('.ne-pr2').on('click',function(){
    $('.cv1').css({
        'transform':'translateX(0)',
        'zIndex':'1'
        
        
    });
    $('.cv2').css({
        'transform':'translateX(120%)',
        'zIndex':'2'

    });
    
  
});






// $(window).on('scroll',function(){
//     if($(window).scrollTop() > 1300){
//         $('.tel1').css('visibility','visible'); 
//         $('.tel2').css('visibility','visible');
//     }
    
// });


let load = document.querySelector('.loading');

window.onload = function(){
    load.style.display = 'none';
};


