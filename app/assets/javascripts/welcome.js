$(document).ready(function(){
  $("#say_hello").click(function(){
    alert('Hello button clicked!');
  });

  // Show Div Button Logic
  $('.show_info_div').click(function(){
    // Remove Class way
    // $('.info_div').removeClass('hide');

    // slide Toggle way
    $('.info_div').slideToggle('fast', function(){
      if($('.info_div').is(':hidden')){
        $('.show_info_div').text('Show Info');
      } else {
        $('.show_info_div').text('Hide Info');
      }
    });


    //.show way
    // $('.info_div').show();

    // toggleClass way
    // $('.info_div').toggleClass('hide');
  });

  $('#change_background').click(function(){
    // addClass
    // $('body').addClass('blue-background');

    // toggleClass
    $('body').toggleClass('blue-background');
    
    // .css - not best practice
    // $('body').css('background-color', 'blue');

  });

  $('h1').text('Modified by jQuery').css('color', 'red').slideUp(2000).slideDown(2000);

  $('#name').keyup(function(e){
    debugger
    $('#live_name').text($(this).val());
  });

  $('#birthdate').change(function(){
    var pickedDate = Date.parse($(this).val());

    var ageDifMs = Date.now() - pickedDate;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    $('#live_age').text("You are " + calculatedAge + " Years old!");
  });

  $('#state').change(function(){
    $('#state_info').text("you live in " + $(this).val());
  });

  $('#user_form').submit(function(e){
    e.preventDefault();
  });

  $('#user_list_button').click(function(){
    // Get value of text input

    var userInput = $('#user_input').val().trim();
    if(userInput.length) {
    // Append new list item with text input value
    $('#users_list').append('<li>' + userInput + '</li>');
    $('#user_input').val('');
    } else { 
      alert('blank input not allowed!!!!')
    }
  });

  $('#clear_list_button').click(function(){
    $('#users_list').empty();
  });
});