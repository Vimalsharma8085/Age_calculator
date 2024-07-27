function calculateAge() {

    var dob = document.getElementById("dob").value;
    
    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }
    
    var dobDate = new Date(dob);
    
    if (isNaN(dobDate.getTime())) {
        alert("Invalid date. Please enter a valid date.");
        return;
    }
    
    var today = new Date();
    
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDifference = today.getMonth() - dobDate.getMonth();
    console.log(age);
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    
    document.getElementById("age").innerText = "Your age is " + age + " years.";

}
