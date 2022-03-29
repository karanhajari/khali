
$(document).ready(()=>{
  
   var tr =  $('table tr');
    $.ajax({
        url: "http://localhost:3000/doctor",
        data: "GET",
        success: (x) => {
      
          var doctorList = x;
          doctorList.forEach(doctor => {
           
             var row = $("<tr><td>"+doctor.firstName + " "+doctor.lastName+"</td><td>"+doctor.eductaion+"</td><td>"+doctor.speciality+"</td><td>"+doctor.availability+"</td><td>"+doctor.Gender+"</td>  <td><button type='button' class=' btn btn-primary d-table ' data-bs-toggle='modal' data-bs-target='#ModalForm'  onclick='getAppointment("+doctor.id+")'>Get Appointment</button></td></tr>");
             $("#myTable").append(row);
            
            
            });
          
        },
        error: (e) => {
          alert("error: " + e);
        },
        complete: () => {
          console.log("call is completed...");
        },
      });
          
       
    
})
