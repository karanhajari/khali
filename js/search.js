$(document).ready(() => {
    var tr = $('table tr');
    
    $.ajax({
        url: "http://localhost:3000/doctor",
        data: "GET",
        success: (x) => {
        
            var doctorList = x;
            $("#searchDoctorBtn").click(() => {
                var doctorName = $("#searchDoctor").val();
                doctorList.forEach(doctor => {
                  
                    if (doctorName === doctor.firstName) {
                        var row = $("<tr><td>" + doctor.firstName + " " + doctor.lastName + "</td><td>" + doctor.eductaion + "</td><td>" + doctor.speciality + "</td><td>" + doctor.availability + "</td><td>" + doctor.Gender + "</td>  <td><button type='button' class='btn btn-primary d-table' data-bs-toggle='modal' data-bs-target='#ModalForm'>Get Appointment</button></td></tr>");
                        $("#myTable").html(row);
                        
                    }
                });
               
            })

        },
        error: (e) => {
            alert("error: " + e);
        },
        complete: () => {
            console.log("call is completed...");
        },
    });

})
