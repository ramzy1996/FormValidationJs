

const form = document.querySelector("#login-form");
const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

let userName = form.elements.namedItem("username");
let password = form.elements.namedItem("password");

userName.addEventListener('input',validate); 
password.addEventListener("input", validate); 


form.addEventListener('submit',function(e){
    e.preventDefault();
    alert('Submitted');
    return true;
})

function validate(e){
    // console.log(e.target.name);
    let target=e.target;

    if (target.name == "password") {
      if (pass_reg.test(target.value)) {
        target.classList.add("valid");
        target.classList.remove("invalid");
      } else {
        target.classList.add("invalid");
        target.classList.remove("valid");
      }
    }
    if(target.name=='username')
    {
        if (target.value.length >= 3) {
          target.classList.add("valid");
          target.classList.remove("invalid");
        } else {
          target.classList.add("invalid");
          target.classList.remove("valid");
        }
    }
}