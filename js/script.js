
// event pada saat link di klik
$('.page-scroll').on('click', function(e){

     //ambil isi href
     var tujuan = $(this).attr('href');
     
     // tangkap elemen yang bersangkutan
     var elemenTujuan = $(tujuan);
     // console.log (elemenTujuan.offset().top);

     $('html, body').animate({
          scrollTop: elemenTujuan.offset().top -50
     }, 1300, 'swing');

     e.preventDefault(); 

});

  
// paralax

// jumbotron
$(window).scroll(function() {
     var wScroll = $(this).scrollTop();

     $('.jumbotron img').css({
          'transform' : 'translate(0px, '+wScroll/4 +'%)'
     })

     $('.jumbotron h1').css({
          'transform' : 'translate(0px, '+wScroll/2 +'%)'
     })

     $('.jumbotron p').css({
          'transform' : 'translate(0px, '+wScroll/1 +'%)'
     })
// jumbotron


     // portfolio
     if (wScroll >  $('.portfolio').offset().top -300 ) {
          $(' .portfolio .img-thumbnail').each(function(i){
               setTimeout(function(){
                    $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
               }, 300 * (i+1));
          });
        
     }
     
     //$('.portfolio .img-thumbnail').addClass('muncul');
     
});


 
