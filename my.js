function myFunc(){
    var x = document.getElementById("password")
    var hide1 = document.getElementById("hide1")
    var hide2 = document.getElementById("hide2")

    if(x.type === 'password'){
        x.type = 'text'
        hide2.style.display = 'block'
        hide1.style.display = 'none'
    }else{
        x.type = 'password'
        hide2.style.display = 'none'
        hide1.style.display = 'block'
    }
}