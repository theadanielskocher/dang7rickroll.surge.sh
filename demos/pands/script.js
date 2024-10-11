var do_calcul = function() {
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);
    var result;

    if (this.id == "add") {
        result = num1 + num2;
    } else if (this.id == "substract") {
        result = num1 - num2;
    }
    document.getElementById("output1").value = result;
};

var signs_buttons = document.getElementsByClassName("sign");
for(var i=0;i<signs_buttons.length;i++){
    signs_buttons[i].addEventListener('click', do_calcul, false);
}