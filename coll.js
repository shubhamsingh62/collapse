$(document).ready(() =>{

   $('#clickdiv').click( () =>{
  
      $('.two').slideToggle('fast');
      $('.four').slideUp('fast');
      $('.three').slideUp('fast');
     $('#clickdiv1').removeClass('active');
     $('#clickdiv2').removeClass('active');


   })

   $('#clickdiv1').click(() =>{

     $('.three').slideToggle('fast');
     $('.two').slideUp('fast');
     $('.four').slideUp('fast');
     $('#clickdiv').removeClass('active');
     $('#clickdiv2').removeClass('active');
	 $('#clickdiv1').addClass('active');
   })
   $('#clickdiv2').click( () =>{

      $('.four').slideToggle('fast');
      $('.three').slideUp('fast');
      $('.two').slideUp('fast')
     $('#clickdiv').removeClass('active');
     $('#clickdiv1').removeClass('active');
     $('#clickdiv2').addClass('active');
     
     })

}) //end of ready function