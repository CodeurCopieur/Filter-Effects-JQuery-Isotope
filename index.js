$(function(){
 
  var link = $('.list__Item a');


  $(link).click((e)=> {
    e.preventDefault();

    $(link).removeClass('is-active');
    $(e.target).addClass('is-active');

    var selector = $(e.target).attr("data-filter");
    $('.container').isotope({
      filter: selector
    })
    return false;
    
  })

  $('.container').imagesLoaded( function() {
    $('.container').isotope({
      // options
      itemSelector: '.card',
      layoutMode: 'fitRows'
    });
  });

});