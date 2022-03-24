function iniciar(){
    var btncalcular= document.getElementById('btncalcular');
    btncalcular.addEventListener("click", clickbtncalcular);
}
function clickbtncalcular(){
    var valor1= document.getElementById('valor1');
    var cuenta= valor1.value;
    document.getElementById('resultado1').innerHTML=(cuenta);
    var valor2= document.getElementById('valor2');
    var calculopropina= valor2.value;
    document.getElementById('resultado2').innerHTML=((cuenta*calculopropina)/100);
    var total=Number(cuenta)+Number((calculopropina*cuenta)/100);
    document.getElementById('resultado3').innerHTML=(total);
}    
