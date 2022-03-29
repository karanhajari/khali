$(document).ready(() => {
  $("#userSignin").submit((event) => {
    event.preventDefault();
    var email = $("#userEmail").val();
    var password = $("#userPassword").val();
  
    $.ajax({
      url: "http://localhost:3000/users",
      data: "GET",
      success: (x) => {
       
        x.forEach(element => {
          
          if (element.email === email && element.password === password) {
            sessionStorage.setItem('user', JSON.stringify(element));
            window.location = "userDash.html";
          }
        });
      },
      error: (e) => {
        alert("error: " + e);
      },
      complete: () => {
        console.log("call is completed...");
      },
    });

  });


  $("#doctorSignin").submit((event) => {
    event.preventDefault();
    var email = $("#doctorEmail").val();
    var password = $("#doctorPassword").val();
    $.ajax({
      url: "http://localhost:3000/doctor",
      data: "GET",
      success: (x) => {
        
        x.forEach(element => {
          if (element.email === email && element.password === password) {
           sessionStorage.setItem('doctor', JSON.stringify(element));
            window.location = "doctorDash.html"
          }


        });
      },
      error: (e) => {
        alert("error: " + e);
      },
      complete: () => {
        console.log("call is completed...");
      },
    });


  });
});