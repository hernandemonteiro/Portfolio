$(document).ready( function(){ //Quando documento estiver pronto
  $('#submit').click( function(){ 
      /* Coletando dados */
      var name  = $('#name').val();
      var email = $('#email').val();
      var message  = $('#message').val();

      /* Validando */
      if(name.length <= 3){
          alert('Informe seu nome');
          return false;
      }
      if(email.length <= 5){
          alert('Informe seu email');
          return false;
      }
      if(message.length <= 5){
          alert('Escreva uma mensagem');
          return false;
      }

      
      var urlData = "&name=" + name +
      "&email=" + email +
      "&message=" + message ;

      
      $.ajax({
           type: "POST",
           url: "contact.php", 
           async: true,
           data: urlData, 
           success: function(data) {
               $('#retornoHTML').html(data);
           },
           beforeSend: function() { 
               $('.loading').fadeIn('fast'); 
           },
           complete: function(){ 
               $('.loading').fadeOut('fast'); 
           }
       });
  });
});