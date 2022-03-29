$(document).ready(()=>{
    // let personName = sessionStorage.getItem("user");
    var obj = JSON.parse(sessionStorage.getItem('user'));

    $('#userName').html("Hello "+obj.firstName);
   
})