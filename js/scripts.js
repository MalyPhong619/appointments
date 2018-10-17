$(document).ready(function() {
  $(".apt").submit(function(event){
    event.preventDefault();

var userName = $("#name").val();
var userdate = $("#dates").val();
var userDescription = $("#description").val();
var starttimes = $("#start").val();
var endtimes = $("#end").val();

$(".outputAppointment").show();
$("#userName").text(userName);
$("#userDescription").text(userDescription);
$("#appointmentDate").text(userdate);
$("#userTime").text(starttimes);
$("#endtimes").text(endtimes);








  });

});
