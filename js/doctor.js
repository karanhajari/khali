$(document).ready(()=>{
    // let personName = sessionStorage.getItem("user");
    var obj = JSON.parse(sessionStorage.getItem('doctor'));

    $('#doctorName').html("Dr. " + obj.firstName +" "+obj.lastName);
  
})