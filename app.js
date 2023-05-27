let isValid = {
    "userName": false,
    "userPhone": false,
    "userEmail": false,
    "userPass": false,
    "userConfirmedPass": false,
    "userAdd": false,
    "userCode": false,
}
let userData = [];

const validation=()=>{
    const submitBtn = document.getElementById('registerBtn');
    if(isValid.userName && isValid.userPhone && isValid.userEmail && isValid.userPass && isValid.userConfirmedPass && isValid.userAdd && isValid.userCode === true){
        submitBtn.disabled = false;
        submitBtn.style.cursor = 'pointer';
    }else{
        submitBtn.disabled = true;
        submitBtn.style.cursor = 'not-allowed';
    }
}
validation();

//showpass
    const showPass_1 = document.getElementById('showPass_1');
    const hidePass_1 = document.getElementById('hidePass_1');
    const showUserPass = document.getElementById('userPassword');

    showPass_1.addEventListener('click',()=>{
        hidePass_1.classList.remove('d-none');
        showPass_1.classList.add('d-none');
        showUserPass.setAttribute('type','text');
    });
    hidePass_1.addEventListener('click',()=>{
        hidePass_1.classList.add('d-none');
        showPass_1.classList.remove('d-none')
        showUserPass.setAttribute('type','password');
    });
    
    const showPass_2 = document.getElementById('showPass_2');
    const hidePass_2 = document.getElementById('hidePass_2');
    const showUserConfirmPass = document.getElementById('userConfirmPassword');

    showPass_2.addEventListener('click',()=>{
        hidePass_2.classList.remove('d-none');
        showPass_2.classList.add('d-none');
        showUserConfirmPass.setAttribute('type','text');
    });
    hidePass_2.addEventListener('click',()=>{
        hidePass_2.classList.add('d-none');
        showPass_2.classList.remove('d-none')
        showUserConfirmPass.setAttribute('type','password');
    });

// validate username
const userName = document.getElementById('userName');
const fullName = document.getElementById('fullName');
const tooltip_1 = new bootstrap.Tooltip(fullName);

userName.addEventListener('keyup',(e)=>{
    userNameValue = e.target.value
    saveName = userNameValue;
    
    let trimName = saveName.trim();
    let wordInName = trimName.split(" ");

    if(wordInName.length >=2){
        fullName.style.color = 'rgb(71, 167, 71)';
        tooltip_1.hide();
        isValid.userName = true;
    }else if(wordInName.length < 2){
        fullName.style.color = 'red';
        tooltip_1.show();
        isValid.userName = false;
    }

    validation();
});

//user phone
const userPhone = document.getElementById("userPhone");
const phone = document.getElementById('phone');
const tooltip_2 = new bootstrap.Tooltip(phone);
userPhone.addEventListener('keyup', (e)=>{
    let userPhoneValue = e.target.value;
    let hasCharacter = /[a-zA-Z]/.test(userPhoneValue);

    if(hasCharacter || userPhoneValue.length <=0 || userPhoneValue.length > 11 || userPhoneValue.length < 11){
        phone.style.color = 'red';
        tooltip_2.show();
        isValid.userPhone = false;
    }else{
        phone.style.color = 'rgb(71, 167, 71)';
        tooltip_2.hide();
        isValid.userPhone = true;
    }
    
    validation();
});

//user EMail
const userEmail = document.getElementById('userEmail');
const email = document.getElementById('email');
const tooltip_3 = new bootstrap.Tooltip(email);
userEmail.addEventListener('keyup',(e)=>{
    let userEmailValue = e.target.value;
    let hasSign = /[@.]/.test(userEmailValue);

    if(hasSign){
        email.style.color = 'rgb(71, 167, 71)';
        tooltip_3.hide();
        isValid.userEmail = true;
    }else{
        email.style.color = 'red';
        tooltip_3.show();
        isValid.userEmail = false;
    }

    validation();
});


//user password
const userPassword = document.getElementById("userPassword");
const password = document.getElementById('password');
const tooltip_4 = new bootstrap.Tooltip(password);
const invalidPass = document.getElementById('invalidPass');
const tooltip_4_1 = new bootstrap.Tooltip(invalidPass);
var userPasswordValue;

userPassword.addEventListener('keyup',(e)=>{
    userPasswordValue = e.target.value; 

    let hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(userPasswordValue);

    if(hasSpecialCharacters && userPasswordValue.length >= 6){
        password.style.color = 'rgb(71, 167, 71)';
        tooltip_4.hide();
        tooltip_4_1.hide();
        isValid.userPass = true;
    }else if(userPasswordValue.length >= 6 && !hasSpecialCharacters || userPasswordValue.length < 6 && userPasswordValue.length > 0){
        password.style.color = 'rgb(255, 150, 37)';
        tooltip_4.show();
        tooltip_4_1.hide();
        isValid.userPass = true;
    }else if(userPasswordValue.length <= 0){
        password.style.color = 'red';
        tooltip_4_1.show();
        tooltip_4.hide();
        isValid.userPass = false;
    }

    validation();
});

//confirm password
const userConfirmPassword = document.getElementById('userConfirmPassword');
const confirmPass = document.getElementById('confirmPassword');
const tooltip_5 = new bootstrap.Tooltip(confirmPass);
const invalidPass_2 = document.getElementById('invalidPass_2');
const tooltip_5_1 = new bootstrap.Tooltip(invalidPass_2);

userConfirmPassword.addEventListener('keyup',(e)=>{
    let userConfirmPasswordValue = e.target.value
    let iconCol = document.getElementById('password');

    if(userConfirmPasswordValue === userPasswordValue){
        if(iconCol.style.color == 'rgb(255, 150, 37)'){
            confirmPass.style.color = `${iconCol.style.color}`;
            tooltip_5.show();
            tooltip_5_1.hide();
            isValid.userConfirmedPass = true;
        }else{
            tooltip_5.hide();
            confirmPass.style.color = `${iconCol.style.color}`;
            tooltip_5_1.hide();
            isValid.userConfirmedPass = true;
        }
    }else if(userConfirmPasswordValue != userPasswordValue){
        confirmPass.style.color = 'red';
        tooltip_5_1.show();
        isValid.userConfirmedPass = false;
    }

    validation();
});

//address
const userAdd = document.getElementById('userAdd');
const address = document.getElementById('address');
const tooltip_6 = new bootstrap.Tooltip(address);
userAdd.addEventListener('keyup',(e)=>{
    let userAddValue = e.target.value
        if(userAddValue.length <= 6){
            address.style.color = 'red';
            tooltip_6.show();
            isValid.userAdd = false;
        }else{
            address.style.color = 'rgb(71, 167, 71)';
            tooltip_6.hide();
            isValid.userAdd = true;
        }

        validation();
});

//zipcode
const userZipCode = document.getElementById('userZipCode');
const zipCode = document.getElementById('zipCode');
const tooltip_7 = new bootstrap.Tooltip(zipCode);
userZipCode.addEventListener('keyup',(e)=>{
    let userZipCodeValue = e.target.value;

    let hasCharacter = /[a-zA-Z]/.test(userZipCodeValue);

    if(hasCharacter || userZipCodeValue.length > 5 || userZipCodeValue <=0){
        zipCode.style.color = 'red';
        tooltip_7.show();
        isValid.userCode = false;
    }else{
        zipCode.style.color = 'rgb(71, 167, 71)';
        tooltip_7.hide();
        isValid.userCode = true;
    }

    validation();
})

//resgiter button
document.getElementById('registerBtn').addEventListener('click',(e)=>{
    e.preventDefault();
    userData.push(
        {
            "Name":document.getElementById('userName').value,
            "Phone":document.getElementById("userPhone").value,
            "Email":document.getElementById('userEmail').value,
            "Password":document.getElementById("userPassword").value,
            "Address": document.getElementById('userAdd').value,
            "ZipCode":document.getElementById('userZipCode').value
        }
    );
    setTimeout(()=>{
        localStorage.setItem('UserData',JSON.stringify(userData));
    },1000);

    // alert("Your data is saved to your local storage");

    const name = document.createElement('p');
    name.innerText = `Name: ${document.getElementById('userName').value}`
    const phone = document.createElement('p');
    phone.innerText =`Phone: ${document.getElementById("userPhone").value}`
    const email = document.createElement('p');
    email.innerText =`Email: ${document.getElementById('userEmail').value}`
    const password = document.createElement('p');
    password.innerText =`Password: ${document.getElementById("userPassword").value}`
    const address = document.createElement('p');
    address.innerText =`Address: ${document.getElementById('userAdd').value}`
    const zipCode = document.createElement('p');
    zipCode.innerText =`Zip code: ${document.getElementById('userZipCode').value}`
    document.getElementById('displayData').appendChild(name);
    document.getElementById('displayData').appendChild(phone);
    document.getElementById('displayData').appendChild(email);
    document.getElementById('displayData').appendChild(password);
    document.getElementById('displayData').appendChild(address);
    document.getElementById('displayData').appendChild(zipCode);
});

const reload=()=>{
    location.reload();
}