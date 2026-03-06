
document.getElementById('signInBtn').addEventListener('click', () => {

    const userNameInput = document.getElementById('userNameInput');
    const userPasswordInput = document.getElementById('userPasswordInput');

    const userName = userNameInput.value;
    const userPassword = userPasswordInput.value;

    if(userName.length > 0 && userPassword.length > 0){
        if(userName === 'admin' && userPassword === 'admin123'){
            window.location.assign("./dashboard.html")
        } else{
            alert('Sign In failed')
        }
    }else{
        alert(`
            Something wrong!
            please try again!
            `)
    }

    console.log(userName, userPassword)

});

