function summa(a, b) {
    var s = a + b;
    alert(s);
    return s;
}


function validation() {
    var userName = document.regForm.username.value;
    userName.startsWith();
    is
    if(userName.trim().length <= 1){
        alert("Incorrect User Name");
        //focus on element
        document.regForm.username.focus();
        return false;
    }
    // all valid
    return true;
}