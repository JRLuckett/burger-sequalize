$(document).ready(function(){
  $('#submit').on('click', function(event){
    event.preventDefault();
    var burgerName = {
      name:$('#new-burger').val().trim()
    };
    $.post('/burgers', burgerName).then(data){
      console.log(data);
      $('#new-burger').val("");
    }
  });
});
