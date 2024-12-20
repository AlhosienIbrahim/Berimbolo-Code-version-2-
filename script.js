function Check_the_form(){
    let names = document.getElementById("N").value.trim();
    let emails = document.getElementById("E").value.trim();
    let messages = document.getElementById("M").value.trim();
    
    if (names === "" || emails === "" || messages === "") {
        alert("All fields must be filled out");
        return false;
    }
    
    if (emails.indexOf("@") === -1 || emails.indexOf(".") === -1) {
        alert("Please enter a real email address");
        return false;
    }
    
    alert("Form submitted successfully!");
    return true;
}
