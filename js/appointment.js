var doctor;
function getAppointment(id) {
  var user = JSON.parse(sessionStorage.getItem('user'));
  $.ajax({
    url: "http://localhost:3000/doctor",
    data: "GET",
    success: (doctors) => {
      doctors.forEach(d => {
        if (id === d.id) {
          doctor = d;

        }
        $("#getRequestAppointment").submit((event) => {
          event.preventDefault();
          var from = $("#from").val();
          var to = $("#to").val();
          // var data = {
          //   "userName": user.firstName + " " + user.lastName,
          //   "startDate": from,
          //   "endDate": to
          // }
          
       
           $.ajax({
            url: "http://localhost:3000/doctor/" + id,
            type: "PUT",
            data: {
              "id": id,
              "firstName": doctor.firstName,
              "lastName": doctor.lastName,
              "Gender": doctor.Gender,
              "email": doctor.email,
              "password": doctor.password,
              "availability": true,
              "speciality": doctor.speciality,
              "eductaion": doctor.eductaion,
              "appointments": [
                {
                  "userName": user.firstName + " " + user.lastName,
                  "startDate": from,
                  "endDate": to
                }
              ]

            },
            success: function (data) {
              console.log("success...")
            },
            error:(e)=>{
              alert(e);
            }
          })



        });
      });
    },
    error: (e) => {
      alert("error: " + e);
    },
    complete: () => {
      console.log("call is completed...");
    },

  });



}








