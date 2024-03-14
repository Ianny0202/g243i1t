function abrir_aba(num){
    for(let i = 1; i <= 5; i++){
        let id_btn = "btn"+i;
        document.getElementById(id_btn).disabled = false;
    }

    if(num == "1"){
     document.getElementById("btn1").disabled = true;
    }
    if(num == "2"){
        document.getElementById("btn2").disabled = true;
    }
    if(num == "3"){
        document.getElementById("btn3").disabled = true;
    }
    if(num == "4"){
        document.getElementById("btn4").disabled = true;
    }
    if(num == "5"){
        document.getElementById("btn5").disabled = true;
    }
}