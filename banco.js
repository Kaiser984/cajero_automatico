const formulario = document.getElementById("formulario");

var cuentas = [
    { nombre: "cliente", saldo: 200 },
    { nombre: "sandy", saldo: 290 },
    { nombre: "yats", saldo: 67 }
  ];

  function consultar (nombre){
    for (var i = 0; i < cuentas.length; i ++){
        if (nombre == cuentas[i].nombre){
            alert(cuentas[i].saldo)
        }
    }
  }
  
  formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let get_nombre = document.getElementById("usuario").innerHTML;
    consultar(get_nombre);
    console.log(get_nombre)
})

document.getElementById("deposito").onclick=
function(){
    mideposito ()
};

function mideposito(){
    let get_deposito = Number(document.getElementById("depositar").value);
    let get_nombre = document.getElementById("usuario").innerHTML;
    for (var i = 0; i < cuentas.length; i ++){
        if (get_nombre == cuentas[i].nombre){
            if ((cuentas[i].saldo + get_deposito) > 990){
                alert("no es posible")
            }
            else{
                cuentas[i].saldo = get_deposito + cuentas[i].saldo
                alert("Tu nuevo saldo es: " + cuentas[i].saldo)
            }
        }
    }
}

document.getElementById("retiro").onclick=
function(){
    miretiro ()
};

function miretiro(){
    let get_retiro = Number(document.getElementById("retirar").value);
    let get_nombre = document.getElementById("usuario").innerHTML;
    for (var i = 0; i < cuentas.length; i ++){
        if (get_nombre == cuentas[i].nombre){
            if ((cuentas[i].saldo - get_retiro) < 10){
                alert("no es posible")
            }
            else{
                cuentas[i].saldo = cuentas[i].saldo - get_retiro
                alert("Tu saldo nuevo es: " + cuentas[i].saldo)
            }
        }
    }
};