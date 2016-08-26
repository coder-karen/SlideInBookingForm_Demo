
$(document).ready(function() {

  $('.presshere').click(function () {

    $('#bookingform').toggleClass('out');
    $('#bookingform_inner').toggleClass('inner_out');
    $('#closebutton').toggleClass('close_out');
    $('.bookingform_shadow').toggleClass('shadow_on');

  });

});


$(document).ready(function() {

  var disableddates = ["20-09-2016", "21-09-2016", "12-25-2016", "12-20-2016"];  // Change these to dates of your choice.


  function DisableSpecificDates(date) {
    var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
    return [disableddates.indexOf(string) == -1];
  }


  function checkValidDates() {

    var fromText = $("#from");
    var toText = $("#to");
    var fromDate;
    var toDate;
    var notAvailable;


    fromDate = new Date(fromText.val());
    toDate = new Date(toText.val());

    for (i = 0; i < disableddates.length; i++) {
        var temporary = disableddates[i].split("-");

        notAvailable = new Date(temporary[2], temporary[1]-1, temporary[0]);

        if (fromDate < notAvailable && toDate > notAvailable) {
            alert("Date range not available. Please select another date.");
            $("#dialog").dialog();
             
            return false;
        }
    }
  }

  
  $( function() {
    var dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({   
      minDate: 0,
      numberOfMonths: 1,
      beforeShowDay: DisableSpecificDates, 
      dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
      })
      .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
      }),
      
    to = $( "#to" ).datepicker({   
      minDate: 0,
      numberOfMonths: 1,
      beforeShowDay: DisableSpecificDates,
      dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], 
      onSelect: function(to) {
        checkValidDates();
        }      
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 

  function getDate( element ) {
    var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } 
      catch( error ) {
        date = null;
      }
 
      return date;
  }
  
});



});
