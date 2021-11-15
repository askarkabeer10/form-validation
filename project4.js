console.log("this is project4");

const uname = document.getElementById('uname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validName = false;
$('#failure').hide();
$('#success').hide();


// console.log(name,email,phone);
uname.addEventListener('blur',()=>{
    console.log('name is blured')
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/
    let str = uname.value;
    console.log(regex,str)
    if(regex.test(str)){
        console.log('matched')
        uname.classList.remove('is-invalid')
        validName = true;
    }else{
        console.log("no match")
        uname.classList.add('is-invalid')
        validName = false;
    }
})

email.addEventListener('blur',()=>{
    console.log('email is blured')
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-z]){2,7}$/;
    let str = email.value;
    console.log(regex,str)
    if(regex.test(str)){
        console.log('matched')
        email.classList.remove('is-invalid')
        validEmail = true;
    }else{
        console.log("no match")
        email.classList.add('is-invalid')
        validEmail = false;
    }
})

phone.addEventListener('blur',()=>{
    console.log('phone is blured')
    let regex = /^[0-9]{10}$/
    let str = phone.value;
    console.log(regex,str)
    if(regex.test(str)){
        console.log('matched')
        phone.classList.remove('is-invalid')
        validPhone = true;
    }else{
        console.log("no match")
        phone.classList.add('is-invalid')
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("you have clicked submit");
    if(validEmail&&validName&&validPhone){
        let success = document.getElementById('success');
        success.classList.add('show')
        $('#failure').hide();
        $('#success').show();
    }else{
        let failure = document.getElementById('failure')
        failure.classList.add('show')
        $('#success').hide();
        $('#failure').show();
    }
    
})