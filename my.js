function myFunc(){
    var pasw = document.getElementById("password");
    var show = document.getElementById("show");
    var hide = document.getElementById("hide");

    if(pasw.type === 'password'){
        pasw.type = 'text';
        hide.style.display = 'block';
        show.style.display = 'none';
    }else{
        pasw.type = 'password';
        hide.style.display = 'none';
        show.style.display = 'block';
    };
};
