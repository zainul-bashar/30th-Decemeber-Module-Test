function submitForm(){
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let email=document.getElementById('email').value;
    let reason=document.getElementById('reason').value;
    console.log(fname,lname,email,reason);
    if(fname != null && lanme != null && email != null && reason != null){
        alert("Form submitted successfully!")
    }
    else{
        alert("All fields are required!")

    }

}