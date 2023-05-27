let signUp = document.getElementById("sign-up");
let verifyText = document.getElementById("verify-text");

let name1= document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let conpassword = document.getElementById("confirm-password");

signUp.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(name1.value && email.value &&  password.value && conpassword.value){
        verifyText.innerText="Successfully Singned up";
        verifyText.style.color="green"
        loadData()
        console.log(name1.value)
    }
    else{
        
        verifyText.innerText="Error: All the fields are mandatory"
        verifyText.style.color="red";
    }

})

function loadData(){
    let obj ={
        name1:name1.value,
        email:email.value,
        password: password.value,
        conpassword:conpassword.value
    }
    console.log(obj)
    localStorage.setItem("userDetails",JSON.stringify(obj))
    window.location.href="index2.html";

}

